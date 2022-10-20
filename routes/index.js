const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HEYYOOOO ROOT ROUTE!'))

router.get('/cards', controllers.getAllCards)

router.get('/symbols', controllers.getAllSymbols)

router.post('/cards', controllers.createCard)

module.exports = router
