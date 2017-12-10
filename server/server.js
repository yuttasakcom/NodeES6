import app from './app'

// Start Express server.
app.listen(app.get('port'), app.get('host'), err => {
  if (err) throw err
  console.log(`Server running at ${app.get('host')}:${app.get('port')}`)
})
