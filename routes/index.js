const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('HEYYOOOO ROOT ROUTE!'))

router.get('/cards', controllers.getAllCards)

router.get('/cards/:id', controllers.getCardById)

router.put('/cards/:id', controllers.updateCard)

router.delete('/cards/:id', controllers.deleteCard)

router.get('/symbols', controllers.getAllSymbols)

router.get('/symbols/:id', controllers.getSymbolById)

router.post('/symbols', controllers.createSymbol)

router.post('/cards', controllers.createCard)

module.exports = router
