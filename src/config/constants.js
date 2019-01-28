const path = require('path')

const STATIC_FILES_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'static'
)

module.exports = {
  STATIC_FILES_PATH,
}
