#!/bin/bash

# remove all images and containers from computer
docker rm $(docker ps -aq)
docker rmi $(docker images -q) --force
