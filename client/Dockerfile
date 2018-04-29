FROM mhart/alpine-node:8

WORKDIR /app
COPY . /app

RUN npm install -g http-server
RUN npm i --silent
RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
