FROM node:9.2.1-alpine

RUN mkdir -p /install
ADD package.json /install
WORKDIR /install
RUN npm install --only=production
ENV NODE_PATH=/install/node_modules

WORKDIR /worker
COPY ./build/bundle.js /worker/index.js

EXPOSE 3000

CMD node /worker/index.js