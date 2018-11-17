FROM node

RUN apt-get update && apt-get install -y vim

WORKDIR /utterzone-server

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN npm i -g yarn 
RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env	./packages/server/.env

WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 3010 

CMD ["node", "dist/index.js"]