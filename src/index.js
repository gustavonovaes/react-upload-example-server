require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const { STATIC_FILES_PATH } = require('./config/constants')

const app = express()

app.use(morgan('dev'))
app.use(require('./routes'))
app.use('/static', express.static(STATIC_FILES_PATH))

app.listen(process.env.PORT || 3000)
