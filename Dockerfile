FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

# Make home.html the default homepage
RUN printf 'server {\n    listen 80;\n    server_name _;\n    root /usr/share/nginx/html;\n    index home.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]