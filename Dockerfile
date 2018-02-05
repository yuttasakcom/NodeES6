FROM node:9.5.0

WORKDIR /opt
COPY package.json package-lock.json* .
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .

CMD [ "npm", "start" ]