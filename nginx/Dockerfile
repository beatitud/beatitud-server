FROM nginx:alpine

RUN rm /etc/nginx/nginx.conf
COPY ["nginx.conf.template", "/etc/nginx"]

RUN mkdir /etc/nginx/logs
