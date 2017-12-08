import express from 'express'

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.end('Hello!')
})

app.listen(app.get('port'), err => {
  if (err) throw err

  console.log(`Server running at localhost:${app.get('port')}`)
})
