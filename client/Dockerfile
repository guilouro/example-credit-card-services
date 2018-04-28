FROM nginx:alpine

WORKDIR /code
RUN apk add --update nodejs
# RUN apk add --no-cache curl && curl -o- -L https://yarnpkg.com/install.sh | sh

# ENV PATH /root/.yarn/bin:$PATH
COPY . /code
RUN npm i
RUN npm run build
RUN mv ./dist/* /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
