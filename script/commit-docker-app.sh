#!/bin/bash

docker-compose -f docker-compose-dev.yml build --no-cache app
docker tag paste_app bfellows37/paste
docker push bfellows37/paste
