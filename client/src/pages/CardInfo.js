import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Symbol from '../components/Symbol'

const CardInfo = () => {
  let { cardId } = useParams()

  const [cardInfo, setCardInfo] = useState(null)

  const [symbolInfo, setSymbolInfo] = useState(null)

  const getCardInfo = async () => {
    const response = await axios.get(`http://localhost:3001/cards/${cardId}`)
    // console.log(response)
    setCardInfo(response.data.card)
    setSymbolInfo(response.data.card.symbols)
  }

  let navigate = useNavigate()

  const deleteCard = async () => {
    await axios.delete(`http://localhost:3001/cards/${cardId}`)
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
          </div>
          {cardInfo.base ? null : (
            <div>
              <section className="buttons">
                <button className="modificationButton" onClick={deleteCard}>
                  Delete this Card
                </button>
                <button className="modificationButton" onClick={modifyCard}>
                  Modify this Card
                </button>
              </section>
            </div>
          )}
        </div>
      ) : null}
      <button className="backButton" onClick={() => navigate('/cards')}>
        ALL CARDS
      </button>
    </div>
  )
  //   <>
  //     {cardInfo ? (
  //       <div className="cardInfo">
  //         <div className="cardInfoLeft">
  //           <img
  //             className="imageForCard"
  //             src={cardInfo.image}
  //             alt={cardInfo.name}
  //           ></img>
  //           <h1>{cardInfo.name}</h1>
  //         </div>
  //         <div className="cardInfoRight">
  //           <div className="cardKeywords">
  //             <div className="keywords">
  //               {cardInfo.keywords.map((keyword, i) => (
  //                 <h3 key={i} className="keywordsList">
  //                   {keyword}
  //                 </h3>
  //               ))}
  //             </div>
  //             <div className="reverseKeywords">
  //               {cardInfo.reverseKeywords.map((keyword) => (
  //                 <h3 key={keyword} className="keywordsList">
  //                   {keyword}
  //                 </h3>
  //               ))}
  //             </div>
  //           </div>
  //           <div className="description">
  //             <p>{cardInfo.description}</p>
  //           </div>
  //           <div className="cardSymbols">
  //             {cardInfo.symbols.map((symbol) => (
  //               <Symbol
  //                 key={symbol._id}
  //                 name={symbol.name}
  //                 image={symbol.image}
  //                 keywords={symbol.keywords}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //         {cardInfo.base ? null : (
  //           <div>
  //             <section className="buttons">
  //               <button className="modificationButton" onClick={deleteCard}>
  //                 Delete this Card
  //               </button>
  //               <button className="modificationButton" onClick={modifyCard}>
  //                 Modify this Card
  //               </button>
  //             </section>
  //           </div>
  //         )}
  //       </div>
  //     ) : null}
  //     <button className="backButton" onClick={() => navigate('/cards')}>
  //       ALL CARDS
  //     </button>
  //   </>
  // )
}

export default CardInfo
