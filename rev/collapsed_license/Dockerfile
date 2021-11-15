FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN apt-get -y install socat python3
RUN apt-get -y update --fix-missing
RUN apt-get -y install python3-pip
RUN groupadd -r ctf && useradd -r -g ctf ctf
RUN pip3 install requests

ADD distfiles/y05h1k1ng50f7 /home/ctf/y05h1k1ng50f7
ADD distfiles/server.py     /home/ctf/server.py
ADD challenge/flag.txt      /home/ctf/flag.txt
RUN chmod 500 /home/ctf/server.py
RUN chmod 500 /home/ctf/y05h1k1ng50f7
RUN chmod 400 /home/ctf/flag.txt
RUN chown ctf:root /home/ctf -R

USER ctf
WORKDIR /home/ctf
CMD socat TCP-L:10765,fork,reuseaddr EXEC:"python3 ./server.py",stderr
