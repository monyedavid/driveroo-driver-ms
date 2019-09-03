#! /bin/bash
yarn build:server
yarn build:extras
docker build -t lilmakijr/d-a-ms:latest .
docker push lilmakijr/d-a-ms
ssh root@167.99.137.246 "docker pull lilmakijr/d-a-ms:latest && docker tag lilmakijr/d-a-ms:latest dokku/driveroo-driver-ms:latest && dokku tags:deploy driveroo-driver-ms latest"