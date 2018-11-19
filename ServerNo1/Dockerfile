FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=3000

EXPOSE 3000

RUN adduser -D myuser

USER myuser

CMD npm start
