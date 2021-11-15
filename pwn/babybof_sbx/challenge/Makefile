all: sandbox vuln
	cp sandbox.c ../distfiles/src
	cp vuln.c ../distfiles/src
	mv libsandbox.so ../distfiles
	mv vuln ../distfiles

run:
	LD_PRELOAD=./libsandbox.so ./vuln

sandbox: sandbox.c
	gcc sandbox.c -o libsandbox.so -pie -fstack-protector -O3 -shared -fPIC

vuln: vuln.c
	gcc vuln.c -o vuln -no-pie -fno-stack-protector -O3
