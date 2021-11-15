p = 0x999120a873890329cf2adc1c544150ad00f9b6b2f2c9535ea6ce2b44d5b678e7
F = GF(p)
a = F(0x4b5ec9227ac1c16bcc9c03656b648380f06d7e889940bf2a9dce4708047a21cd)
b = F(0x984e50d5688ee40207ad56f879c80c07ab16d82ec8075dfca5840184802b0742)

y = sqrt((a^2 + sqrt(a^4-4*b^2))/2)
x = b/y
print(int.to_bytes(int(x), 24, 'big') + int.to_bytes(int(y), 19, 'big'))
