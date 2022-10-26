import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Symbol from '../components/Symbol'

const DailyPull = () => {
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
    <>
      {cardInfo ? (
        <div className="cardInfo">
          <div className="cardInfoLeft">
            <img
              className="imageForCard"
              src={cardInfo.image}
              alt={cardInfo.name}
            ></img>
            <h1>{cardInfo.name}</h1>
          </div>
          <div className="cardInfoRight">
            <div className="cardKeywords">
              <div className="keywords">
                {cardInfo.keywords.map((keyword) => (
                  <h3 key={keyword} className="keywordsList">
                    {keyword}
                  </h3>
                ))}
              </div>
              <div className="reverseKeywords">
                {cardInfo.reverseKeywords.map((keyword) => (
                  <h3 key={keyword} className="keywordsList">
                    {keyword}
                  </h3>
                ))}
              </div>
            </div>
            <div className="description">
              <p>{cardInfo.description}</p>
            </div>
            <div className="cardSymbols">
              {/* {cardInfo.symbols.map((symbol) => (
                <Symbol
                  key={symbol._id}
                  name={symbol.name}
                  image={symbol.image}
                  keywords={symbol.keywords}
                />
              ))} */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default DailyPull
