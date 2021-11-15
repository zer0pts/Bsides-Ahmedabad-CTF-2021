FROM php:7-apache

ADD challenge/flag.txt /
RUN chmod 444 /flag.txt

WORKDIR /var/www/html

ADD distfiles/index.php ./
ADD distfiles/login.php ./
RUN chown -R root:www-data ./
RUN chmod -R 440           ./
RUN chmod    550           ./
