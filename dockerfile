FROM node

WORKDIR /pali

COPY ./package.json .

RUN npm i -g yarn
RUN npm i -g reflect-metadata
RUN yarn install --production

COPY ./src/build ./src/build
COPY ./ormconfig.json .

WORKDIR ./src

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "build/index.js"]
