FROM node:carbon

ADD srv /paste-srv

WORKDIR /paste-srv

RUN npm install --silent

EXPOSE 3000

CMD node server.js
