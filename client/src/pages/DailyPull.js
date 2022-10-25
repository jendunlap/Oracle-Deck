import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DailyPull = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const getCard = async () => {
    const response = await axios.get(`http://localhost:3001/cards`)
    console.log(response)
    setCardInfo(response.data.card)
  }

  useEffect(() => {
    getCard()
  }, [cardId])

  return (
    <div>
      {cardInfo ? (
        <div className="cardName">
          <div>
            <h1>{cardInfo.name}</h1>
          </div>
          <section className="imageForCard">
            <img src={cardInfo.image} alt={cardInfo.name} />
          </section>
          <section className="details">
            <div className="cardDetails">
              <div className="keywords">
                <h3>{cardInfo.keywords}</h3>
              </div>
              <div className="reverseKeywords">
                <h3>{cardInfo.reverseKeywords}</h3>
              </div>
            </div>
            <div className="description">
              <p>{cardInfo.description}</p>
            </div>
          </section>
          <section>
            <div className="cardSymbols">
              <h3>{cardInfo.symbols.image}</h3>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  )
}

export default DailyPull
