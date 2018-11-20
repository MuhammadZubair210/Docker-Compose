FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon

RUN npm install

ENV PORT=5000

EXPOSE 5000

RUN adduser -D myuser

USER myuser

CMD npm start --hot
