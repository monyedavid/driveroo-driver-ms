#! /bin/bash
yarn build:server
docker build -t lilmakijr/d-a-ms:latest .
docker push lilmakijr/d-a-ms
heroku container:push web
heroku container:release web