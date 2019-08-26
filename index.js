const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')

const PORT = 3000
const app = express()

app.use(morgan('combined'))
app.disable('x-powered-by')
app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello' })
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))