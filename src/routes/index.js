const Routes = app => {
  app.use('/', (req, res) => {
    res.sendFile('index.html')
  })
}

export default Routes
