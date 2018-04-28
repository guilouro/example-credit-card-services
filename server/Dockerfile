FROM node:8.11.1-alpine

WORKDIR /app
COPY . /app
RUN npm i --production

EXPOSE 8080

CMD [ "npm", "start" ]
