with open("../distfiles/output.txt", "r") as f:
    exec(f.read())

m = ((y - 1) % (p*p)) // p
print(int.to_bytes(int(m), 64, 'big'))
