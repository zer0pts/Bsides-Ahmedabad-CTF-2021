package main

import (
	"fmt"
	"strings"
	"math/big"
	"encoding/hex"
)

func main() {
	a, _ := new(big.Int).SetString("4b5ec9227ac1c16bcc9c03656b648380f06d7e889940bf2a9dce4708047a21cd", 16)
	b, _ := new(big.Int).SetString("984e50d5688ee40207ad56f879c80c07ab16d82ec8075dfca5840184802b0742", 16)
	p, _ := new(big.Int).SetString("999120a873890329cf2adc1c544150ad00f9b6b2f2c9535ea6ce2b44d5b678e7", 16)

	fmt.Print("FLAG: ")
	var flag string
	if _, err := fmt.Scan(&flag); err != nil {
		fmt.Println("[-] I/O Error")
		return
	}

	if !strings.HasPrefix(flag, "Neko{") || !strings.HasSuffix(flag, "}") {
		fmt.Println("[-] Invalid flag")
		return
	}

	hexflag := hex.EncodeToString([]byte(flag))
	if len(hexflag) <= 48 || len(hexflag) >= 96 {
		fmt.Println("[-] Invalid flag")
		return
	}

	x, _ := new(big.Int).SetString(hexflag[:48], 16)
	y, _ := new(big.Int).SetString(hexflag[48:], 16)

	x2y2, x2, y2, xy, a2 := new(big.Int), new(big.Int), new(big.Int), new(big.Int), new(big.Int)
	x2.Mul(x, x)
	y2.Mul(y, y)
	x2y2.Add(x2, y2)
	x2y2.Mod(x2y2, p)
	a2.Mul(a, a)
	a2.Mod(a2, p)
	xy.Mul(x, y)
	xy.Mod(xy, p)

	if x2y2.Cmp(a2) == 0 && xy.Cmp(b) == 0 {
		fmt.Println("[+] Correct flag!")
	} else {
		fmt.Println("[+] Invalid flag")
	}
}
