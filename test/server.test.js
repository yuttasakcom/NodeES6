import supertest from 'supertest'

const request = supertest('http://localhost:3000')

describe('GET /', () => {
  it('should return Welcome to NODE ES6 response', () => {
    request.get('/').expect('Welcome to NODE ES6')
  })
})
