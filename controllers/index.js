const { Card, Symbol } = require('../models')

const createCard = async (req, res) => {
  try {
    const card = await new Card(req.body)
    await card.save()
    return res.status(201).json({
      card
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find()
    return res.status(200).json({ cards })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const card = await Card.findById(id).populate('symbols')
    if (card) {
      return res.status(200).json({ card })
    }
    return res.status(404).send('The card does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(card)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Card.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Card deleted')
    }
    throw new Error('Card not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllSymbols = async (req, res) => {
  try {
    const symbols = await Symbol.find()
    return res.status(200).json({ symbols })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSymbolById = async (req, res) => {
  try {
    const { id } = req.params
    const symbol = await Symbol.findById(id)
    if (symbol) {
      return res.status(200).json({ symbol })
    }
    return res.status(404).send('The symbol does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createSymbol = async (req, res) => {
  try {
    const symbol = await new Symbol(req.body)
    await symbol.save()
    return res.status(201).json({
      symbol
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createCard,
  getAllCards,
  getCardById,
  updateCard,
  deleteCard,
  getAllSymbols,
  getSymbolById,
  createSymbol
}
