FROM node:8.11.1-alpine
LABEL maintainer='Guilherme Louro | guipclouro@gmail.com'

WORKDIR /app
COPY . /app
RUN ls -la
RUN npm i --production

EXPOSE 8080

CMD [ "npm", "start" ]
