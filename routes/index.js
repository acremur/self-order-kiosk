const router = require('express').Router()

router.get('/', (req, res) => res.send('Welcome to The Self Order Kiosk Backend!'))

module.exports = router