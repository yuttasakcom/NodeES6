import request from 'supertest'

import app from '../src/app'

describe('GET /', () => {
  it('should return Welcome to NODE ES6 response', done => {
    request(app)
      .get('/')
      .expect('Hello Node ES6')
      .end(done)
  })
})
