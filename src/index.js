require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(require('./routes'))

app.listen(process.env.PORT || 3000)
