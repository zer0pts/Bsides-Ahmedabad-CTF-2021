FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN groupadd -r pwn && useradd -r -g pwn pwn

RUN chmod 1733 /tmp /var/tmp /dev/shm

WORKDIR /home/pwn
ADD challenge/flag.txt /flag.txt
ADD distfiles/html     html
ADD distfiles/server   server
RUN chmod 444 /flag.txt
RUN chmod 550 server
RUN mv /flag.txt /flag-$(md5sum /flag.txt | awk '{print $1}').txt

RUN chown -R root:pwn /home/pwn

USER pwn
RUN ls /home/pwn -lh
