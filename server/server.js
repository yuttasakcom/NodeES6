// Module dependencies.
import express from 'express'
import routes from './routes'

// Create Express server.
const app = express()

// Express configuration.
app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Start Express server.
app.listen(app.get('port'), app.get('host'), err => {
  if (err) throw err
  console.log(`Server running at ${app.get('host')}:${app.get('port')}`)
})

// Export for test
module.exports = app
