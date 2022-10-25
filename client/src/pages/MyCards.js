import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'

const ViewCards = () => {
  const [cards, setCards] = useState([])

  let navigate = useNavigate()
  let { cardsId } = useParams()

  const getCards = async () => {
    const response = await axios.get(`http://localhost:3001/cards`)
    setCards(response.data.cards)
    console.log(response.data.cards)
  }

  const viewCard = (id) => {
    navigate(`/cards/${id}`)
  }

  useEffect(() => {
    getCards()
  }, [cardsId])

  return (
    <div className="myCardGrid">
      <div className="myCardsCard">
        {cards
          .filter((card) => card.base === false)
          .map((card) => (
            <Card
              id={card._id}
              key={card._id}
              image={card.image}
              name={card.name}
              onClick={viewCard}
            />
          ))}
      </div>
    </div>
  )
}

export default ViewCards
