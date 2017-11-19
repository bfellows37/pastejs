#!/bin/bash

# put the site down
docker-compose down

./script/delete-images-and-containers.sh

# put the site up
docker-compose up -d
