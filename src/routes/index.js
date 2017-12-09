const Routes = app => {
  app.use('/', (req, res) => {
    res.end('Welcome to NODE ES6')
  })
}

export default Routes
