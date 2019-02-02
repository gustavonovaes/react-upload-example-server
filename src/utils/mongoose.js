const mongoose = require('mongoose')

const createConnection = uri => {
  return mongoose.createConnection(uri, {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000
  }).then(
    () => {},
    err => {
      console.log('Unable to connect to the server. Please start the server. Error:', err.name);
    }
  )
}

const defineSchemaModels = (conn, schemas) => {
  return Object.keys(schemas).reduce((acc, name) => {
    acc[name] = conn.model(name, schemas[name])
    return acc
  }, {})
}

module.exports = {
  createConnection,
  defineSchemaModels
}
