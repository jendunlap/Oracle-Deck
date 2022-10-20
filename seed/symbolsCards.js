const db = require('../db')
const { Symbol, Card } = require('../models/')

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
  const pointOfReflection = await new Symbol({
    name: 'POINT OF REFLECTION',
    image: 'https://i.imgur.com/HQX7o1H.jpg',
    keywords: ['assessment', 'dreams', 'awareness']
  })
  pointOfReflection.save()
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
      reverseKeywords: [
        'deception',
        'manipulation',
        'elusiveness',
        'hypocrisy'
      ],
      description:
        'Fox reminds us that it is not only okay, but also expected, for us to use our wits and cunning as means of survival. Fox gives you the permission to be wary and watchful in situations that are unfamiliar. The clever nature of foxes and their association as messengers means that this card can present itself as a warning that there may be someone or something decieving you. Whether it’s an old story that needs rewriting or a toxic person in your life, Fox asks you to keep a keen eye out for trouble, and to take notice of anything that seems to have you snared in such a way that you feel you cannot escape. When postive, Fox is a reminder of our capabilities to hold firm and necessary boundaries and use our brains to protect ourselves from harm. When negative, Fox can suggest that your protectiveness of yourself or someone else has devolved into paranoia or manipulative behavior. Sometimes, danger is near, and other times it’s okay to let our gurads down. Fox isn’t an omen of negativity, but permission to identify the things in your life that make you feel trapped, and use the craftiness necessary to extricate yourself from their grasp.',
      base: true,
      symbols: [foxSkull._id, braids._id]
    },
    {
      name: 'HONEYBEE',
      image: 'https://i.imgur.com/3RBpQsE.jpg',
      keywords: ['warmth', 'creativity', 'diligence', 'fertility'],
      reverseKeywords: ['overwork', 'obedience', 'conformity'],
      description:
        'Honeybee is about diligent, creative work. This is the time for sustained energy and consistent growth. Your end goals may be lofty, and that can feel extremely daunting. Honeybee reminds us to take all things one step at a time, and to never forget the creative power of community. When you find yourself at a block or losing momentum, reach out to your peers for some motivation and warmth. If we surround ourselves with the tools we need, both mentally and physically, we are capable of great acts of generation. What can you put into the world using your hands and heart? Where can you apply steady, humble work to grow an idea into something tangible? The wisdom of Honeybee is to appreciate every effort made along the way, because sustained creation leads to big magic. The key to sustained energy is deep appreciation for the process - an ability to stay focused and not get overwhelmed by the scope of your dreams. Everything is attainable through industry, diligence, and inner vitality.',
      base: true,
      symbols: [honeybee._id, honeycomb._id, ginko._id]
    },
    {
      name: 'METAMORPHOSIS',
      image: 'https://i.imgur.com/EUHIwFw.jpg',
      keywords: ['progression', 'unfolding', 'transformation', 'potential'],
      reverseKeywords: ['regression', 'radical change', 'stasis'],
      description:
        'Metamorphosis is a card of radical change, complete structural shifts, and ultimately, liberation. With Metamorphosis comes potential - there is something stirring, something ready to be remade. You are transforming, learning, and breaking free from your past self, the stories you’ve been told. You may be changing, but you are also becoming more and more yourself.. Metamorphosis requires patience and faith. Not all stages of becoming are easy or comfortable. Oftentimes, they require quite a bit of quiet time, and a lot of trust that with time, all things come back together. In the process of Metamorphosis, we are torn apart so that we can grow from the pieces, emerging stronger than before. The result is worth the wait, worth the undoing, worth the changes, when you come out the other side closer to where you truly want to be.',
      base: true,
      symbols: [skull._id, caterpillar._id, chrysalis._id, moth._id, fir._id]
    },
    {
      name: 'OWL',
      image: 'https://i.imgur.com/zmEyUrt.jpg',
      keywords: ['wisdom', 'cleverness', 'power', 'adaptability'],
      reverseKeywords: ['darkness', 'mourning', 'mortality', 'trnsformation'],
      description:
        'When you receive Owl, it is not an omen of death or a reason to be afraid. It is an acknowledgement that you have worked through immense trauma and grief in the past, and are now experiencing something that calls on the wisdom you gained from those experiences. Oftentimes, we try so hard to avoid feeling the pain of loss that we refuse to acknowledge it and therefore become unable to move forward. Owl is a guide through the darkness - a reminder that you’ve been there before and come out the other side whole. Owl doesn’t necessarily mean that any sort of pain is coming to you, but it could suggest that someone in your life is experiencing the pain of something you’ve gone through before, and that you are now in a unique place to lend them support and wisdom. It is an opportunity to figure out how to step back into dark places in our past in order to usher others through their own depths. Owl is about being able to not only tolerate the darkness, but embrace it, face it, and become comfortable visiting it when you need to access your deepest powers.',
      base: true,
      symbols: [owl._id, crescentMoon._id]
    },
    {
      name: 'POISON',
      image: 'https://i.imgur.com/0dxX6rT.jpg',
      keywords: ['resistance', 'balance', 'remorse', 'forgiveness', 'poison'],
      reverseKeywords: [
        'inhibitions',
        'bitterness',
        'destruction',
        'toxic relationships'
      ],
      description:
        'Poison suggests that someone, perhaps your own ego, is being too hard on you. Poison is a symbol of harm and evil, but also of negative thought patterns, self-protection, and natural balance. There is a place in this world for quiet protection, for slinking away from your feelings or hiding in substance abuse. Staying here can be tempting, because Poison brings a sort of blissful oblivion, the ability to forget. But there is also liberation in Poison - the agency to heal yourself by recognizing your own mortality, your own flaws, and accepting them as a necessary and worthy part of who you are. Old stories may still be harming you, but you can choose to walk away from them and form your own opinions. Now is not the time for self-pity, but the time for self-forgiveness. If you have caused someone else pain, apologize. If you have caused yourself pain, treat your wounds with tenderness.',
      base: true,
      symbols: [bottle._id, skull._id, cayenne._id]
    },
    {
      name: 'REFLECTION',
      image: 'https://i.imgur.com/S78FNl9.jpg',
      keywords: ['perception', 'dreams', 'consciousness', 'reassessment'],
      reverseKeywords: ['fogginess', 'lack of awareness', 'nightmares'],
      description:
        'Now is the time for quiet self-reflection, and to trust the things that come to you in liminal spaces, such as in dreams or when your mind goes foggy. Our conscious mind is created by what we see, but when we turn inward we are left with our personal perceptions. Take stock of the way you view yourself, and acknowledge that you may not be seeing yourself clearly. In what ways are you rejecting the parts of you that are meant to shine? Are you being too hard on yourself? Are there old stories you could stand to rewrite? Wipe away the dust on your mirror and really look at who you are becoming. Let your conscious and unconscious work together to bring you closer to the truth. When we see ourselves clearly, we can grow and build. When we know what we want to be, we can begin to move towards that reality with vigor and certainty. Reflection is about getting clear with not only what you want, but where you are on the road to getting it. Take your time here. It’s not a race, and it’s okay to spend time here learning about yourself. Figure out where you are expanding and where you could use support, and then cleanse yourself of the muck and move forward.',
      base: true,
      symbols: [eucalyptus._id, pointOfReflection._id, hand._id]
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
