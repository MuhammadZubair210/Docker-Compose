FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon

RUN npm install

ENV PORT=4000

EXPOSE 4000

RUN adduser -D myuser

USER myuser

CMD npm start --hot
