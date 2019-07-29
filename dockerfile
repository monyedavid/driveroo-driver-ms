FROM node

WORKDIR /driveroo-driver-ms

COPY ./package.json .
COPY ./packages/gql-rest-server/package.json ./packages/gql-rest-server/

RUN npm i -g yarn
RUN npm i -g reflect-metadata
RUN yarn install

COPY ./packages/gql-rest-server/build  ./packages/gql-rest-server/build
COPY ./packages/gql-rest-server/.env  ./packages/gql-rest-server/.env

WORKDIR ./packages/gql-rest-server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "build/index.js"]