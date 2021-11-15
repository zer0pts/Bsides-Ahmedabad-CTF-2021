#!/bin/bash

docker-compose exec mysql bash -c "while [ 1 ] ; do echo 'select count(*) from admin_queue;' ; sleep 2; done | mysql -u mysql -D comic_catalog --password='mJ5kcbZc6UC7N2A@153'"
