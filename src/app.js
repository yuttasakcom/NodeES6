// Module dependencies.
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

// Init environment
dotenv.config()

// Create Express server.
const app = express()

// Express configuration.
app.set('port', process.env.PORT || 8100)

// Routes.
routes(app)

// Start Express server.
app.listen(app.get('port'), () => {
  console.log(`Server running at port:${app.get('port')}`)
  console.log('Press CTRL-C to stop')
})

// Export app
export default app
