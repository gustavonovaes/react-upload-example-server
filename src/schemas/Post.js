const Schema = require('mongoose').Schema
const { STATIC_FILES_PATH } = require('../config/constants')
const { unlink } = require('../utils/fs')
const s3 = require('../services/s3')

const Post = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  storageType: { type: String, default: 'local' },
  createdAt: { type: Date, default: Date.now }
})

Post.pre('remove', function () {
  if (this.storageType === 'local') {
    const filePath = `${STATIC_FILES_PATH}/${this.key}`
    console.log(filePath)
    return unlink(filePath)
  }

  if (this.storageType === 's3') {
    return s3.deleteObject({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: this.key
    }).promise()
  }
})

module.exports = Post
