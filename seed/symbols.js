const db = require('../db')
const Symbol = require('..models/symbol')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const symbols = [
    {
      name: 'BOTTLE',
      image: 'https://i.imgur.com/tfmec3A.jpg',
      keywords: ['boundaries', 'resistance', 'containment']
    },
    {
      name: 'BRAIDS',
      image: 'https://i.imgur.com/0eNbFqu.jpg',
      keywords: ['seduction', 'self', 'strength', 'magical power']
    },
    {
      name: 'CATERPILLAR',
      image: 'https://i.imgur.com/0lJXdTZ.jpg',
      keywords: ['potential', 'self', 'temporary state']
    },
    {
      name: 'CAYENNE',
      image: 'https://i.imgur.com/eB45qmZ.jpg',
      keywords: ['change', 'cleansing', 'repells negativity']
    },
    {
      name: 'CHRYSALIS',
      image: 'https://i.imgur.com/EchVjTg.jpg',
      keywords: ['change', 'transmutation', 'rest']
    },
    {
      name: 'CRESCENT MOON',
      image: 'https://i.imgur.com/iAqIO9f.jpg',
      keywords: ['mysteries', 'darkness', 'grief']
    },
    {
      name: 'EUCALYPTUS',
      image: 'https://i.imgur.com/hQ6sMZZ.jpg',
      keywords: ['cleansing', 'protection', 'healing']
    },
    {
      name: 'FIR',
      image: 'https://i.imgur.com/9WNuMqI.jpg',
      keywords: ['manifestation', 'growth', 'power']
    },
    {
      name: 'FOX SKULL',
      image: 'https://i.imgur.com/2G5TUgS.jpg',
      keywords: ['cunning', 'messenger', 'survival']
    },
    {
      name: 'GINKO',
      image: 'https://i.imgur.com/LZoBCFr.jpg',
      keywords: ['sustained', 'energy', 'creativity']
    },
    {
      name: 'HAND',
      image: 'https://i.imgur.com/y3moPtt.jpg',
      keywords: ['self', 'consciousness', 'intention']
    },
    {
      name: 'HONEYBEE',
      image: 'https://i.imgur.com/OsgxrEx.jpg',
      keywords: ['industry', 'fertility', 'diligence']
    },
    {
      name: 'HONEYCOMB',
      image: 'https://i.imgur.com/XvqDvpu.jpg',
      keywords: ['community', 'warmth', 'growth']
    },
    {
      name: 'MOTH',
      image: 'https://i.imgur.com/kkQXERl.jpg',
      keywords: ['uncertainty', 'trust', 'unfolding']
    },
    {
      name: 'OWL',
      image: 'https://i.imgur.com/r8dVQMZ.jpg',
      keywords: ['wisdom', 'mortality', 'changeability']
    },
    {
      name: 'POINT OF REFLECTION',
      image: 'https://i.imgur.com/HQX7o1H.jpg',
      keywords: ['assessment', 'dreams', 'awareness']
    },
    {
      name: 'SKULL',
      image: 'https://i.imgur.com/X1eNWuP.jpg',
      keywords: ['mortality', 'destruction', 'toxicity']
    }
  ]

  await Symbol.insertMany(symbols)
  console.log('Created Symbols!!')
}
const run = async () => {
  await main()
  db.close()
}

run()
