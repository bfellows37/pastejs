#!/bin/bash

# put the site down
docker-compose down

mkdir deploy/data
mkdir deploy/data/db
mkdir deploy/data/configdb

./script/delete-images-and-containers.sh

# put the site up
docker-compose up -d
