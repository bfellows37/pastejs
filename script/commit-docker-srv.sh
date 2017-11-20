#!/bin/bash

docker-compose -f docker-compose-dev.yml build --no-cache srv
docker tag paste_app bfellows37/pasteapi
docker push bfellows37/pasteapi
