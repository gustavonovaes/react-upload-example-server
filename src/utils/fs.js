const fs = require('fs')
const { promisify } = require('util')

const unlink = path => {
  return promisify(fs.unlink)(path)
}

module.exports = {
  unlink
}
