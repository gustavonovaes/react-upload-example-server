const router = require('express').Router()

const multerConfig = require('./config/multer')
const multer = require('multer')(multerConfig)

router.get('/posts', async (req, res) => {
  const posts = await req.$models.Post.find()
  return res.json(posts)
})

router.post('/posts', multer.single('file'), async (req, res) => {
  const { originalname: name, size, filename, key, location: url } = req.file

  const post = await req.$models.Post.create({
    name,
    size,
    key: key || filename,
    url: url || `/static/${key}`,
    storageType: process.env.STORAGE_TYPE || 'local'
  })

  return res.json(post)
})

router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params

  const post = await req.$models.Post.findById(id)

  post.delete()

  return res.send()
})

module.exports = router
