const { STATIC_FILES_PATH, MAX_FILE_SIZE } = require('./constants')

const allowedMimes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/gif',
]

module.exports = {
  dest: STATIC_FILES_PATH,
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
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
