FROM nginx:1.25.4-alpine-slim
RUN rm -rf /usr/share/nginx/html/*
ADD . /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]