# Beatitud Server

This repo is the root of the server.

Here we set up the nginx architecture and then link this to beatitud frontend and backend parts.

## Connection to Beatitud VM

```shell
$ ssh ubuntu@beatitud.io
```

Pull all git repos:
```shell
$ sudo git submodule update --recursive --remote
```

To build django only, without cache :
```shell
$  docker-compose build --no-cache django
```

To build all containers :
```bash
$ docker-compose up --build -d
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