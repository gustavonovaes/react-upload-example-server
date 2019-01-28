const path = require('path')

const STATIC_FILES_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'static'
)

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB

module.exports = {
  STATIC_FILES_PATH,
  MAX_FILE_SIZE
}
