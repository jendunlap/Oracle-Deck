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

const getAllSymbols = async (req, res) => {
  try {
    const symbols = await Symbol.find()
    return res.status(200).json({ symbols })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCard,
  getAllCards,
  getAllSymbols
}
