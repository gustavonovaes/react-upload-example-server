const router = require('express').Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'World' })
})

module.exports = router
