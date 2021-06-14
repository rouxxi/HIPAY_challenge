FROM node:14

WORKDIR /var/www/html/backend/

COPY bin/backend/entrypoint.sh /tmp/

RUN chmod 777 -R /tmp

ENTRYPOINT ["/tmp/entrypoint.sh"]