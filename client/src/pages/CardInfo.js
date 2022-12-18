import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Symbol from '../components/Symbol'

const CardInfo = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const [symbolInfo, setSymbolInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`/cards/${cardId}`)

    setCardInfo(response.data.card)
    setSymbolInfo(response.data.card.symbols)
  }

  let navigate = useNavigate()

  const deleteCard = async () => {
    await axios.delete(`/cards/${cardId}`)
    navigate(`/mycards`)
  }

  const modifyCard = async () => {
    navigate(`/modifycard/${cardId}`)
  }

  useEffect(() => {
    getCardInfo()
  }, [cardId])

  return (
    <div className="cardInfo">
      {cardInfo ? (
        <div className="viewInfo">
          <div className="infoLeft">
            <img
              className="imageForCard"
              src={cardInfo.image}
              alt={cardInfo.name}
            ></img>
            {cardInfo.base ? (
              <h1 className="name">{cardInfo.name}</h1>
            ) : (
              <h1 className="nameWhite">{cardInfo.name}</h1>
            )}
          </div>
          <div className="infoRight">
            <div className="cardKeywords">
              <div className="keywords">
                <img src="https://i.imgur.com/1FQFvDq.jpeg" />
                {cardInfo.keywords.map((keyword, i) => (
                  <h3 key={i} className="keywordsList">
                    {keyword}
                  </h3>
                ))}
              </div>
              <div className="reverseKeywords">
                <img src="https://i.imgur.com/yMYW27q.jpg" />
                {cardInfo.reverseKeywords.map((keyword) => (
                  <h3 key={keyword} className="keywordsList">
                    {keyword}
                  </h3>
                ))}
              </div>
            </div>
            <div className="description">
              <h5>{cardInfo.description}</h5>
            </div>
            <div className="cardSymbols">
              {cardInfo.symbols.map((symbol) => (
                <Symbol
                  key={symbol._id}
                  name={symbol.name}
                  image={symbol.image}
                  keywords={symbol.keywords}
                />
              ))}
            </div>
            {cardInfo.base ? null : (
              <div>
                <section className="buttons">
                  <button className="modificationButton" onClick={deleteCard}>
                    delete
                  </button>
                  <button className="modificationButton" onClick={modifyCard}>
                    modify
                  </button>
                </section>
              </div>
            )}
          </div>
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate(-1)}>
        BACK
      </button>
    </div>
  )
}

export default CardInfo
