#! /bin/bash
yarn build:server
docker build -t lilmakijr/driveroo-driver-ms:latest .
docker push lilmakijr/driveroo-driver-ms
heroku container:push web
heroku container:release web