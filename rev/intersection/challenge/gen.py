from sage.all import *

flag = b'Neko{intersection_of_x^2+y^2=a^2_and_y=b/x}'

sx, sy = flag[:24], flag[24:]
x = int.from_bytes(sx, 'big')
y = int.from_bytes(sy, 'big')
p = random_prime(1<<256)

F = GF(p)

b = F(x * y)
a2 = F(x**2 + y**2)
a = sqrt(a2)
print(a, b, p)
