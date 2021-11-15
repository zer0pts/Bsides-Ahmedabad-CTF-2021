import ast
with open("output.txt") as f:
    xs = ast.literal_eval(f.read())

# SOLVE...
B = 2**(111 * 8 * 11)
c, n = [list(z) for z in zip(*xs)]

N = product(n)
k = len(xs)

l = [CRT_list([0]*i + [1] + [0]*(k-i-1), n) for i in range(k)]

M = matrix(QQ, k + 1, k + 1)
for i in range(k):
    M[i,i] = 1

for i in range(k):
    M[i,k] = l[i] * int(c[i]) / B
M[k,k] = N / B

L = M.LLL()

for row in L:
    try:
        z = []
        for i in range(k):
            z.append(B * row[k] / row[i])
        z = gcd(z)
        m = z.nth_root(11)
        print(bytes.fromhex(hex(m)[2:]))
    except:
        pass

