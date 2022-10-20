const { Schema } = require('mongoose')

const Symbol = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    keywords: [{ type: String, required: true }]
  },
  { timestamps: true }
)

module.exports = Symbol
