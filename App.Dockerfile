FROM node:carbon

ADD frontend /paste-app

WORKDIR /paste-app

RUN npm install --silent

RUN touch .env

RUN rm .env

WORKDIR /paste-app/src/assets

RUN /paste-app/node_modules/.bin/bower install --allow-root

WORKDIR /paste-app

RUN ./node_modules/.bin/ng build --prod --no-progress

EXPOSE 4200

CMD node server.js
