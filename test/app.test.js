import request from 'supertest'

import app from '../src/app'

describe('Test Routes', () => {
  it('should return Hello NODE ES6 response', done => {
    request(app)
      .get('/')
      .expect('Hello Node ES6')
      .end(done)
  })

  it('should return I am happy and healthy', done => {
    request(app)
      .get('/health')
      .expect('I am happy and healthy\n')
      .end(done)
  })
})
