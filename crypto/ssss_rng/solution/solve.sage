import ast
with open("./output.txt") as f:
    p = ast.literal_eval(f.readline())
    vs = ast.literal_eval(f.readline())
    z = ast.literal_eval(f.readline())

PR.<a,b,x,X> = PolynomialRing(GF(p))
def g():
    global a, b, x
    x = (a*x + b)
    return x

f = g() + g()*X + g()*X**2 + g()*X**3 + g()*X**4 + g()*X**5
polys = [f(X=i) - v for i, v in vs]
B = Ideal(polys).groebner_basis()

a = -B[0].constant_coefficient()
b = -B[1].constant_coefficient()
x = -B[2].constant_coefficient()

for r, _ in (f(a=a, b=b, x=x) - z).univariate_polynomial().roots():
    try:
        print(bytes.fromhex(hex(r)[2:]))
    except:
        pass

