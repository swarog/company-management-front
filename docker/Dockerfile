# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine

COPY ./build /usr/share/nginx/html
# nginx.conf to configure nginx because of react routing
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
