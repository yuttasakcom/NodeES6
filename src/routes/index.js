const router = app => {
  app.use('/', (req, res) => {
    res.end('Hello Node ES6')
  })
}

export default router
