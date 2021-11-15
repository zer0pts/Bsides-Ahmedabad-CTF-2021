import base64
import os
from ptrlib import *

HOST = os.getenv("HOST", "localhost")
PORT = os.getenv("PORT", "10765")

p = 257
a = 3 # primitive root of p
sol = [((a**i) % p) for i in range(p - 1)] # costas array
print(sol)

board = []
for i in range(256):
    board.append([0 for j in range(256)])
    board[-1][sol[i]-1] = 1

key = b''
for i in range(256):
    for h in range(32):
        c = 0
        for j in range(8):
            c |= board[i][h*8+j] << j
        key += bytes([c])

with open("key", "wb") as f:
    f.write(key)
exit()
sock = Socket(HOST, int(PORT))
sock.sendlineafter(": ", base64.b64encode(key))
print(sock.recv())
sock.close()
