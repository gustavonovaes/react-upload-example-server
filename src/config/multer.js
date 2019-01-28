const { STATIC_FILES_PATH } = require('./constants')

const allowedMimes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/gif',
]

module.exports = {
  dest: STATIC_FILES_PATH,
  fileFilter: (req, file, cb) => {
    const isAllowedMime = allowedMimes.includes(
      file.mimetype
    )

    cb(
      isAllowedMime ? null : new Error('Invalid file type'),
      true
    )
  }
}
