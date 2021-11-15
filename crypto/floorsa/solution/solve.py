from Crypto.Util.number import inverse

exec(open("../distfiles/output.txt").read())
phi = s * 2
d = inverse(65537, phi)

m = pow(c, d, n)
print(int.to_bytes(m, 2048//8, 'big'))
