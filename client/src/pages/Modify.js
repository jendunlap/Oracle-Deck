import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import images from '../images'

const Modify = () => {
  let { cardId } = useParams()
  let navigate = useNavigate()

  const initialState = {
    name: '',
    keywords: [],
    reverseKeywords: [],
    description: '',
    base: false,
    image: '',
    symbols: [{ _id: '', image: '' }]
  }

  const [formState, setFormState] = useState(initialState)

  const [selecting, setSelecting] = useState(false)

  const [selectingSymbol, setSelectingSymbol] = useState(false)

  const [chosenSymbol, setChosenSymbol] = useState(null)

  const [symbols, setSymbols] = useState([])

  const getSymbols = async () => {
    const response = await axios.get(`/symbols`)
    setSymbols(response.data.symbols)
    console.log(response.data.symbols)
  }

  const selectImage = (image) => {
    let tempState = { ...formState, image: image.url }
    setFormState(tempState)
    setSelecting(false)
  }

  const selectSymbol = (symbol) => {
    let tempState = {
      ...formState,
      symbols: [symbol._id]
    }
    setChosenSymbol(symbol.image)
    setFormState(tempState)
    setSelectingSymbol(false)
  }

  useEffect(() => {
    const getCardInfo = async () => {
      const response = await axios.get(`/cards/${cardId}`)
      setFormState(response.data.card)
      if (response.data.card.symbols.length > 0) {
        console.log(response.data.card.symbols[0].image)
        setChosenSymbol(response.data.card.symbols[0].image)
      }
      getSymbols()
    }
    getCardInfo()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`/cards/${cardId}`, formState)
    setFormState(initialState)
    navigate(`/cards/${cardId}`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="form">
      <h1 className="createTitle">MODIFY this CARD</h1>
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="left">
          <label htmlFor="name">card name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            value={formState.name}
          />
          <label htmlFor="createCardImage">card image:</label>
          {selecting ? (
            <div className="imageMap">
              {images.map((image, index) => (
                <img
                  className="mappedImages"
                  key={index}
                  src={image.url}
                  alt={image.name}
                  onClick={() => selectImage(image)}
                />
              ))}
            </div>
          ) : (
            <div className="cardImageButton" onClick={() => setSelecting(true)}>
              <img className="selectedImage" src={formState.image} />
              CHANGE
            </div>
          )}
        </div>
        <div className="right">
          <label htmlFor="keywords">keywords:</label>
          <input
            onChange={handleChange}
            type="text"
            id="keywords"
            value={formState.keywords}
          />
          <label htmlFor="reverseKeywords">keywords for reverse:</label>
          <input
            onChange={handleChange}
            type="text"
            id="reverseKeywords"
            value={formState.reverseKeywords}
          />
          <label htmlFor="description">card description: </label>
          <textarea
            onChange={handleChange}
            id="description"
            cols="30"
            rows="10"
            value={formState.description}
          ></textarea>
          <Link to="/symbols" className="headerLink">
            card symbol:
          </Link>
          {selectingSymbol ? (
            <div className="symbolMap">
              {symbols.map((symbol) => (
                <img
                  className="mappedSymbols"
                  key={symbol._id}
                  src={symbol.image}
                  alt={symbol.name}
                  onClick={() => selectSymbol(symbol)}
                />
              ))}
            </div>
          ) : (
            <div
              className="cardSymbolButton"
              onClick={() => setSelectingSymbol(true)}
            >
              <img className="selectedSymbol" src={chosenSymbol} />
              CHANGE
            </div>
          )}
        </div>
      </form>
      <button className="submitButton" type="submit" onClick={handleSubmit}>
        MODIFY
      </button>
    </div>
  )
}

export default Modify
