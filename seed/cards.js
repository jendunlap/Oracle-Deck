const db = require('../db')
const Card = require('..models/card')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cards = []

  await Card.insertMany(cards)
  console.log('Created Cards!!')
}
const run = async () => {
  await main()
  db.close()
}

run()
