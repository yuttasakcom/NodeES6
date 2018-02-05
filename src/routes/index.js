const router = app => {
  app.use('/', (req, res) => {
    res.end('Hello Node ES6')
  })

  app.get('/health', (req, res) => {
    res.end('I am happy and healthy\n')
  })
}

export default router
