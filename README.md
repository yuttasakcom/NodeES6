## NODE ES6
[![Build Status](https://travis-ci.org/yuttasakcom/NodeES6.svg?branch=master)](https://travis-ci.org/yuttasakcom/NodeES6)
[![Coverage Status](https://coveralls.io/repos/github/yuttasakcom/NodeES6/badge.svg?branch=master)](https://coveralls.io/github/yuttasakcom/NodeES6?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/yuttasakcom/NodeES6.svg)](https://github.com/yuttasakcom/NodeES6/issues)
[![GitHub forks](https://img.shields.io/github/forks/yuttasakcom/NodeES6.svg)](https://github.com/yuttasakcom/NodeES6/network)
[![GitHub stars](https://img.shields.io/github/stars/yuttasakcom/NodeES6.svg)](https://github.com/yuttasakcom/NodeES6/stargazers)
[![GitHub license](https://img.shields.io/github/license/yuttasakcom/NodeES6.svg)](https://github.com/yuttasakcom/NodeES6)

## Table of Contents
- [App](#app)
- [Server](#server)
- [Routes](#routes)
- [Test](#test)
- [Docker](#dokcer)

## App
```javascript
// Module dependencies.
import express from 'express'
import routes from './routes'

// Create Express server.
const app = express()

// Express configuration.
app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Export app
export default app

```

## Server
```javascript
import app from './app'

// Start Express server.
app.listen(app.get('port'), app.get('host'), err => {
  if (err) throw err
  console.log(`Server running at ${app.get('host')}:${app.get('port')}`)
})

```

## Routes
```javascript
const router = app => {
  app.use('/', (req, res) => {
    res.end('Welcome to NODE ES6')
  })
}

export default router

```

## Test
```javascript
import request from 'supertest'

import app from '../server/app'

describe('GET /', () => {
  it('should return Welcome to NODE ES6 response', done => {
    request(app)
      .get('/')
      .expect('Welcome to NODE ES6')
      .end(done)
  })
})

```

## Docker
```
----------------------------------------------
## hosts
----------------------------------------------
127.0.0.1 local.nodees6.com
```

```
----------------------------------------------
## start container
----------------------------------------------
$ docker-compose up -d --build
```

```
----------------------------------------------
Dockerfile
----------------------------------------------
FROM node:9.2.1

RUN mkdir -p /install
ADD package.json /install
WORKDIR /install
RUN npm install --only=production
ENV NODE_PATH=/install/node_modules

WORKDIR /worker
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

```
----------------------------------------------
docker-compose.yml
----------------------------------------------
version: '3'

services:

  proxy:
    build: ./nginx
    image: yuttasakcom/proxy:1.0
    container_name: proxy
    networks:
      - proxy
    ports:
      - "80:80"
    restart: always

  nodees6:
    build: .
    image: yuttasakcom/nodees6:1.0.0
    container_name: nodees6
    environment:
      - HOST=nodees6
    networks:
      - proxy
    restart: always

networks:
  proxy:
    driver: bridge

```