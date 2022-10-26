import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
    symbol: ''
  }

  const [formState, setFormState] = useState(initialState)

  const [selecting, setSelecting] = useState(false)

  const [selectingSymbol, setSelectingSymbol] = useState(false)

  const [symbols, setSymbols] = useState([])

  const getSymbols = async () => {
    const response = await axios.get(`http://localhost:3001/symbols`)
    setSymbols(response.data.symbols)
    console.log(response.data.symbols)
  }

  useEffect(() => {
    getSymbols()
  }, [])

  const selectImage = (image) => {
    let tempState = { ...formState, image: image.url }
    setFormState(tempState)
    setSelecting(false)
  }

  const selectSymbol = (symbol) => {
    let tempState = {
      ...formState,
      symbol: { id: symbol._id, image: symbol.image }
    }
    setFormState(tempState)
    setSelectingSymbol(false)
  }

  useEffect(() => {
    const getCardInfo = async () => {
      const response = await axios.get(`http://localhost:3001/cards/${cardId}`)
      setFormState(response.data.card)
      console.log(response)
    }
    getCardInfo()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3001/cards/${cardId}`, formState)
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
          <label htmlFor="createCardSymbol">card symbol:</label>
          {selectingSymbol ? (
            <div className="imageMap">
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
              className="cardImageButton"
              onClick={() => setSelectingSymbol(true)}
            >
              {/* <img className="selectedImage" src={formState.symbol.image} /> */}
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
