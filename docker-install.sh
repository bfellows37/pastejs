#!/bin/bash
docker-compose down
cd frontend/src/assets
../../node_modules/.bin/bower install
cd ../../..
docker-compose up
