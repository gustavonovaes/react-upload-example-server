const Schema = require('mongoose').Schema
const { STATIC_FILES_PATH } = require('../config/constants')
const { unlink } = require('../utils/fs')

const Post = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
})

Post.pre('remove', function() {
  const filePath = `${STATIC_FILES_PATH}/${this.key}`
  console.log(filePath)
  return unlink(filePath)
})

module.exports = Post
