import binascii
import numpy as np
import ast

def hgcd(a0,a1):
    if a1.degree() <= (a0.degree()//2):
        return np.array([[1,0],[0,1]])
    m = a0.degree()//2
    X = a0.variables()[0]
    b0 = a0 // X**m
    b1 = a1 // X**m
    R = hgcd(b0,b1)
    [d,e] = (R.dot(np.array([a0,a1]).transpose())).transpose()
    ff = d % e
    m = m // 2
    g0 = e // X**m
    g1 = ff // X**m
    S = hgcd(g0,g1)
    q = d // e
    return S.dot(np.array([[0,1],[1,-q]])).dot(R)

def gcd(a0,a1):
    while True:
        print(a0.degree(), end=", ", flush=True)
        if a0 % a1 == 0:
            return a1
        if a0.degree() == a1.degree():
            a1 = a0%a1
        #print(a0.degree())
        R = hgcd(a0,a1)
        [b0,b1] = R.dot(np.array([a0,a1]).transpose()).transpose()
        if b0%b1==0:
            return b1
        c = b0 % b1
        a0 = b1
        a1 = c

with open("./output.txt") as f:
    N = ast.literal_eval(f.readline())
    a = ast.literal_eval(f.readline())
    b = ast.literal_eval(f.readline())
    ct = ast.literal_eval(f.readline())

e = 65537
PR = PolynomialRing(Zmod(N), "x")
x = PR.gen()

c0 = ct[0] * inverse_mod(int(pow(ord("N"), e, N)), N) % N
c1 = ct[1] * inverse_mod(int(pow(ord("e"), e, N)), N) % N

r = x
f0 = r**e - c0

numerator = (r**4 - 2*a*r**2 - 8*b*r + a**2)
denominator = (4*r**3 + 4*a*r + 4*b)
f1 = numerator**e - c1*(denominator**e)

print("computing gcd")

res = gcd(f1, f0)

Px = int(-res.monic().coefficients()[0])

print("\nPx =", Px)

FLAG = ""

r = Zmod(N)(Px)

key_map = {
    int(pow(byte, e, N)): byte for byte in range(256)
}

for ci in ct:
    ci = int(ci/r**e)
    FLAG += chr(key_map[ci])
    r = (r**4 - 2*a*r**2 - 8*b*r + a**2)/(4*r**3 + 4*a*r + 4*b)

print("FLAG :", FLAG)



