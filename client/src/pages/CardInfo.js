import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CardInfo = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`http://localhost:3001/cards/${cardId}`)
    console.log(response)
    setCardInfo(response.data.card)
  }

  let navigate = useNavigate()

  const handleClick = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`http://localhost:3001/cards/${cardId}`)
    const back = () => {
      navigate(`/cards`)
    }
    back()
  }

  useEffect(() => {
    getCardInfo()
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
          <button onClick={handleClick}> x </button>
        </div>
      ) : null}
    </div>
  )
}

export default CardInfo
