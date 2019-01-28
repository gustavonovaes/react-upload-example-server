const multerS3 = require('multer-s3')
const s3 = require('../services/s3')

const { STATIC_FILES_PATH, MAX_FILE_SIZE } = require('./constants')

const allowedMimes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/gif',
]

const storageTypes = {
  s3: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const timestamp = Date.now().toString()
      const key = `${timestamp}-${file.originalname}`
      cb(null, key)
    }
  })
}

if (process.env.STORAGE_TYPE && !storageTypes[process.env.STORAGE_TYPE]) {
  throw new Error('Invalid STORAGE_TYPE')
}

const storage = storageTypes[process.env.STORAGE_TYPE]

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
  },
  storage
}
