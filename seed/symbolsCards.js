const db = require('../db')
const { Symbol, Card } = require('..models/')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bottle = await new Symbol({
    name: 'BOTTLE',
    image: 'https://i.imgur.com/tfmec3A.jpg',
    keywords: ['boundaries', 'resistance', 'containment']
  })
  bottle.save()
  const braids = await new Symbol({
    name: 'BRAIDS',
    image: 'https://i.imgur.com/0eNbFqu.jpg',
    keywords: ['seduction', 'self', 'strength', 'magical power']
  })
  braids.save()
  const caterpillar = await new Symbol({
    name: 'CATERPILLAR',
    image: 'https://i.imgur.com/0lJXdTZ.jpg',
    keywords: ['potential', 'self', 'temporary state']
  })
  caterpillar.save()
  const cayenne = await new Symbol({
    name: 'CAYENNE',
    image: 'https://i.imgur.com/eB45qmZ.jpg',
    keywords: ['change', 'cleansing', 'repells negativity']
  })
  cayenne.save()
  const chrysalis = await new Symbol({
    name: 'CHRYSALIS',
    image: 'https://i.imgur.com/EchVjTg.jpg',
    keywords: ['change', 'transmutation', 'rest']
  })
  chrysalis.save()
  const crescentMoon = await new Symbol({
    name: 'CRESCENT MOON',
    image: 'https://i.imgur.com/iAqIO9f.jpg',
    keywords: ['mysteries', 'darkness', 'grief']
  })
  crescentMoon.save()
  const eucalyptus = await new Symbol({
    name: 'EUCALYPTUS',
    image: 'https://i.imgur.com/hQ6sMZZ.jpg',
    keywords: ['cleansing', 'protection', 'healing']
  })
  eucalyptus.save()
  const fir = await new Symbol({
    name: 'FIR',
    image: 'https://i.imgur.com/9WNuMqI.jpg',
    keywords: ['manifestation', 'growth', 'power']
  })
  fir.save()
  const foxSkull = await new Symbol({
    name: 'FOX SKULL',
    image: 'https://i.imgur.com/2G5TUgS.jpg',
    keywords: ['cunning', 'messenger', 'survival']
  })
  foxSkull.save()
  const ginko = await new Symbol({
    name: 'GINKO',
    image: 'https://i.imgur.com/LZoBCFr.jpg',
    keywords: ['sustained', 'energy', 'creativity']
  })
  ginko.save()
  const hand = await new Symbol({
    name: 'HAND',
    image: 'https://i.imgur.com/y3moPtt.jpg',
    keywords: ['self', 'consciousness', 'intention']
  })
  hand.save()
  const honeybee = await new Symbol({
    name: 'HONEYBEE',
    image: 'https://i.imgur.com/OsgxrEx.jpg',
    keywords: ['industry', 'fertility', 'diligence']
  })
  honeybee.save()
  const honeycomb = await new Symbol({
    name: 'HONEYCOMB',
    image: 'https://i.imgur.com/XvqDvpu.jpg',
    keywords: ['community', 'warmth', 'growth']
  })
  honeycomb.save()
  const moth = await new Symbol({
    name: 'MOTH',
    image: 'https://i.imgur.com/kkQXERl.jpg',
    keywords: ['uncertainty', 'trust', 'unfolding']
  })
  moth.save()
  const owl = await new Symbol({
    name: 'OWL',
    image: 'https://i.imgur.com/r8dVQMZ.jpg',
    keywords: ['wisdom', 'mortality', 'changeability']
  })
  owl.save()
  const pontOfReflection = await new Symbol({
    name: 'POINT OF REFLECTION',
    image: 'https://i.imgur.com/HQX7o1H.jpg',
    keywords: ['assessment', 'dreams', 'awareness']
  })
  pontOfReflection.save()
  const skull = await new Symbol({
    name: 'SKULL',
    image: 'https://i.imgur.com/X1eNWuP.jpg',
    keywords: ['mortality', 'destruction', 'toxicity']
  })
  skull.save()

  const cards = [
    {
      name: 'FOX',
      image: 'https://i.imgur.com/1cqFrzb.jpg',
      keywords: ['survival', 'cunning', 'craftiness', 'quick thinking', 'wit'],
      description:
        'Fox reminds us that it is not only okay, but also expected, for us to use our wits and cunning as means of survival. Fox gives you the permission to be wary and watchful in situations that are unfamiliar. The clever nature of foxes and their association as messengers means that this card can present itself as a warning that there may be someone or something decieving you. Whether it’s an old story that needs rewriting or a toxic person in your life, Fox asks you to keep a keen eye out for trouble, and to take notice of anything that seems to have you snared in such a way that you feel you cannot escape. When postive, Fox is a reminder of our capabilities to hold firm and necessary boundaries and use our brains to protect ourselves from harm. When negative, Fox can suggest that your protectiveness of yourself or someone else has devolved into paranoia or manipulative behavior. Sometimes, danger is near, and other times it’s okay to let our gurads down. Fox isn’t an omen of negativity, but permission to identify the things in your life that make you feel trapped, and use the craftiness necessary to extricate yourself from their grasp. ',
      base: true,
      symbols: [foxSkull._id, braids._id]
    }
  ]

  await Card.insertMany(cards)
  console.log('Created Cards!!')
}
const run = async () => {
  await main()
  db.close()
}

run()
