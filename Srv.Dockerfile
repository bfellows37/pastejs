FROM node:carbon

ADD srv /paste-srv

WORKDIR /paste-srv

RUN npm install

RUN touch .env

RUN rm .env

EXPOSE 3000

CMD node server.js