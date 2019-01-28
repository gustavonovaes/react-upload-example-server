const Schema = require('mongoose').Schema

const Post = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
})

module.exports = Post
