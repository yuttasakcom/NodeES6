const router = app => {
  app.use('/headers', (req, res) => {
    res.json(req.headers)
  })

  app.use('/', (req, res) => {
    res.end('Welcome to NODE ES6')
  })
}

export default router
