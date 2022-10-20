const { Schema } = require('mongoose')

const Card = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    keywords: { type: String, required: true },
    description: { type: String, required: true },
    symbols: { type: Schema.Types.ObjectId, ref: 'Symbol' }
  },
  { timestamps: true }
)

module.exports = Card
