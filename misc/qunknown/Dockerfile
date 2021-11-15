FROM python:3-alpine

RUN apk --no-cache add socat
RUN apk --no-cache add make cmake g++ git
RUN adduser -D ctf

RUN pip install numpy
RUN pip install qulacs

ADD distfiles/server.py /home/ctf/server.py
RUN chmod 500 /home/ctf/server.py
RUN chown ctf:root /home/ctf -R

USER ctf
WORKDIR /home/ctf
CMD socat TCP-L:10907,fork,reuseaddr EXEC:"python3 ./server.py",stderr
