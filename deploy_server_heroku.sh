#! /bin/bash
yarn build:server
yarn build:extras
docker build -t lilmakijr/d-a-ms:latest .
docker push lilmakijr/d-a-ms
heroku container:push web
heroku container:release web
git add . 
git commit -m "build @ lastes"
git push