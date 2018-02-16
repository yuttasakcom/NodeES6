const router = app => {
  app.get('/health', (req, res) => {
    res.end('I am happy and healthy\n')
  })

  app.use('/', (req, res) => {
    res.end('Hello Node ES6')
  })
}

export default router
