FROM node:carbon

ADD frontend /paste-app

WORKDIR /paste-app

RUN npm install

RUN touch .env

RUN rm .env

WORKDIR /paste-app/src/assets

RUN /paste-app/node_modules/.bin/bower install

WORKDIR /paste-app

RUN ./node_modules/.bin/ng build --prod

EXPOSE 4200

CMD node server.js