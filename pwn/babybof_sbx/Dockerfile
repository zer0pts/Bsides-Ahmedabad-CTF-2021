FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN apt-get -y install xinetd
RUN groupadd -r pwn && useradd -r -g pwn pwn

ADD challenge/pwn.xinetd /etc/xinetd.d/pwn
ADD challenge/init.sh    /etc/init.sh
ADD challenge/redir.sh   /home/pwn/.redir.sh
RUN chmod 550 /home/pwn/.redir.sh
RUN chmod 700 /etc/init.sh
RUN chmod 1733 /tmp /var/tmp /dev/shm

WORKDIR /home/pwn
ADD challenge/flag.txt      flag.txt
ADD distfiles/vuln          vuln
ADD distfiles/libsandbox.so libsandbox.so
ADD distfiles/run.sh        run.sh
ADD distfiles/rule.bin      rule.bin
RUN chmod 440 flag.txt
RUN chmod 550 vuln
RUN chmod 550 libsandbox.so
RUN chmod 550 run.sh
RUN chmod 440 rule.bin
RUN mv flag.txt flag-$(md5sum flag.txt | awk '{print $1}').txt

RUN chown -R root:pwn /home/pwn

RUN ls /home/pwn -lh

RUN service xinetd restart
