// Module dependencies.
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routes'

// Init environment
dotenv.config()

// Create Express server.
const app = express()

// App dependence
app.use(morgan('common'))

// Express configuration.
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Start Express server.
const server = app.listen(app.get('port'), () => {
  console.log(`Server running at port:${app.get('port')}`)
  console.log('Press CTRL-C to stop')
})

// Quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint() {
  console.info(
    'Got SIGINT (aka ctrl-c in docker). Graceful shutdown ',
    new Date().toISOString()
  )
  shutdown()
})

// Quit properly on docker stop
process.on('SIGTERM', function onSigterm() {
  console.info(
    'Got SIGTERM (docker container stop). Graceful shutdown ',
    new Date().toISOString()
  )
  shutdown()
})

// Shut down server
function shutdown() {
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err)
      process.exitCode = 1
    }
    process.exit()
  })
}

// Export app
export default server
