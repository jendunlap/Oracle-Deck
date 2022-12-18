import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Symbol from '../components/Symbol'

const Symbols = () => {
  const [symbols, setSymbols] = useState([])
  let { symbolsId } = useParams()
  let navigate = useNavigate()

  const getSymbols = async () => {
    const response = await axios.get(`/symbols`)
    setSymbols(response.data.symbols)
    console.log(response.data.symbols)
  }

  useEffect(() => {
    getSymbols()
  }, [symbolsId])

  return (
    <>
      <div className="symbolGrid">
        <div className="allSymbols">
          {symbols
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((symbol) => (
              <Symbol
                id={symbol._id}
                key={symbol._id}
                image={symbol.image}
                name={symbol.name}
                keywords={symbol.keywords}
              />
            ))}
        </div>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
        BACK
      </button>
    </>
  )
}

export default Symbols
