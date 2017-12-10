// Module dependencies.
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

// Init environment
// use .env edit to dotenv.config()
dotenv.config({ path: '.env.example' })

// Create Express server.
const app = express()

// Express configuration.
app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Start Express server.
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at ${app.get('host')}:${app.get('port')}`)
  console.log('Press CTRL-C to stop')
})

// Export app
export default app
