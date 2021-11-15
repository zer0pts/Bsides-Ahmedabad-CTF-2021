from ptrlib import *

#sock = Process(["python", "server.py"])
sock = Socket("localhost", 10907)

for i in range(10):
    sock.sendlineafter(": ", "H 1; CNOT 1,0;")
    r = int(sock.recvlineafter(": "))
    if r == 1:
        sock.sendlineafter(": ", "Udag 1; X 1; U 1;")
    else:
        sock.sendlineafter(": ", "")

sock.sh()
