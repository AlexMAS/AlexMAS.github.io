#!/usr/bin/env sh

# `docker` folder contains context file (.env)

docker-compose --project-directory . -f docker/docs.yml up
