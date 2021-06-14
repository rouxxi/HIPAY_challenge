FROM node:14

WORKDIR /var/www/html/front/

COPY bin/front/entrypoint.sh /tmp/

RUN chmod 777 -R /tmp

ENTRYPOINT ["/tmp/entrypoint.sh"]