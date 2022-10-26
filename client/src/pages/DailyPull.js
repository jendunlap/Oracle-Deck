import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import Symbol from '../components/Symbol'

const DailyPull = () => {
  let navigate = useNavigate()

  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const [symbolInfo, setSymbolInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`http://localhost:3001/cards`)
    setCardInfo(
      response.data.cards[
        Math.floor(Math.random() * response.data.cards.length)
      ]
    )
    // setSymbolInfo(
    //   response.data.cards[
    //     Math.floor(Math.random() * response.data.cards.length)
    //   ].symbols
    // )
    // console.log(
    //   response.data.cards.symbols[
    //     Math.floor(Math.random() * response.data.cards.length)
    //   ]
    // )
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
            <h1 className="name">{cardInfo.name}</h1>
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
            {/* <div className="cardSymbols">
              {cardInfo.symbols.map((symbol) => (
                <Symbol
                  key={symbol._id}
                  name={symbol.name}
                  image={symbol.image}
                  keywords={symbol.keywords}
                />
              ))}
            </div> */}
          </div>
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate('/cards')}>
        ALL CARDS
      </button>
    </div>
  )
}

export default DailyPull
