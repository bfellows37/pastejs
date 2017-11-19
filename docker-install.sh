#!/bin/bash

# put the site down
docker-compose down

# remove old images and containers
docker rm $(docker ps -aq)
docker rmi $(docker images -q) --force

# install frontend assets........ TODO maybe do this in the container?
cd frontend/src/assets
../../node_modules/.bin/bower install

# put the site up
cd ../../..
docker-compose up
