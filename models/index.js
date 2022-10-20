const { model } = require('mongoose')
const CardSchema = require('./Card')
const SymbolSchema = require('./Symbol')

const Card = model('Card', CardSchema)
const Symbol = model('Symbol', SymbolSchema)

module.exports = {
  Card,
  Symbol
}
