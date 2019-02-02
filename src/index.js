require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { STATIC_FILES_PATH } = require('./config/constants')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(require('./plugins/mongoose')(process.env.MONGO_URL))
app.use(require('./routes'))
app.use('/static', express.static(STATIC_FILES_PATH))

app.listen(process.env.PORT || 3000)
