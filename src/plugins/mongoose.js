const {
  createConnection,
  defineSchemaModels
} = require('../utils/mongoose')

const schemas = require('../schemas')

const mongooseMiddleware = uri => (req, _, next) => {
  let $cache

  Object.defineProperty(req, '$models', {
    get () {
      if (!$cache) {
        const conn = createConnection(uri)
        $cache = defineSchemaModels(conn, schemas)
      }

      return $cache
    }
  })

  next()
}

module.exports = mongooseMiddleware
