This repo will be the root of the server.

Here we will set up the nginx architecture and then link this to beatitud frontend and backend part.

# WARNINGS
- If you need to make a change in docker-compose, first be sure that it can be implemented in prod and in local. Otherwise put this change in docker-compose.prod or docker-compose.local.

## To work in local
First don't forget to pull all the submodules.
1. With a terminal, go in nginx/, create live/beatitud.io. 
Go in beatitud.io and launch
```bash
sudo openssl genrsa -out privkey.pem 2048
sudo openssl req -new -key privkey.pem -out server.csr
sudo openssl x509 -req -days 365 -in server.csr -signkey privkey.pem -out fullchain.pem
```
Warning the last line will create an auto-signed certificat the browser will warn you about it. Use certbot or an official certification instance to get ride of this warning. (In prod we use certBot https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx).

## To Launch
To launch docker compose you need to merge docker-compose.yml with the prod state or local state.
### Production
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
### Local
```bash
docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d
```
You can check the config by replacing 'up -d' by 'config'.

## About Beatitud template
Within Beatitud template you can use env var in this file witht the syntax ${VAR_NAME} then you have to add in the docker-compose file in the command directive of nginx container. Next to $${NGINX_HOST} (double $ is important!).
Ex:
nginx.conf.template
```
...
server {
    ...
    server_name ${SPECIAL_DOMAIN}
    ...
}
```
docker-compose.ym
```
    environment:
      - NGINX_HOST=beatitud.io
      - SPECIAL_DOMAIN=special.com
    command: /bin/sh -c "envsubst '$${NGINX_HOST} $${SPECIAL_DOMAIN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"
```

## Reload a modification in nginx.conf.template
In the nginx container
```bash
envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx -s reload
```

## Logs
Nginx will generate its logs in the nginx/logs/ repo.
There will be logs for every server of nginx. Then it's up to you to cross the information to get what  you want.

## Domain registered
First of all, the only two ports open are 80 and 443 (every connection on 80 will be redirect to 443).
- https://${NGINX_HOST} (landing page)
- https://staging.${NGINX_HOST} (link to staging code for front)
- https://staging.api.${NGINX_HOST} (link to staging code for back)
- https://showcase.${NGINX_HOST} (link to production code for front)
- https://showcase.api.${NGINX_HOST} (link to production code for back)