#!/bin/bash

# put the site down
docker-compose down

# remove old images and containers
docker rm $(docker ps -aq)
docker rmi $(docker images -q) --force

# put the site up
docker-compose up -d
