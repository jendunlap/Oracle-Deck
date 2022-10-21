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
    const card = await Card.findById(id)
    if (card) {
      return res.status(200).json({ card })
    }
    return res.status(404).send('The card does not exist')
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

module.exports = {
  createCard,
  getAllCards,
  getCardById,
  getAllSymbols,
  getSymbolById
}
