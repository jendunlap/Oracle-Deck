const { Schema } = require('mongoose')

const Card = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    keywords: [{ type: String, required: true }],
    reverseKeywords: [{ type: String, required: true }],
    description: { type: String, required: true },
    base: { type: Boolean },
    symbols: [{ type: Schema.Types.ObjectId, ref: 'Symbol' }]
  },
  { timestamps: true }
)

module.exports = Card
