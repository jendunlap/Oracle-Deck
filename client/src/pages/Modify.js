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
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  const [selecting, setSelecting] = useState(false)

  const selectImage = (image) => {
    let tempState = { ...formState, image: image.url }
    setFormState(tempState)
    setSelecting(false)
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
    <form className="modifyForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Card Name:</label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        value={formState.name}
      />
      <label htmlFor="image">Card Image:</label>
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
          Select
        </div>
      )}
      <label htmlFor="keywords">Keywords:</label>
      <input
        onChange={handleChange}
        type="text"
        id="keywords"
        value={formState.keywords}
      />
      <label htmlFor="reverseKeywords">Keywords for Reverse:</label>
      <input
        onChange={handleChange}
        type="text"
        id="reverseKeywords"
        value={formState.reverseKeywords}
      />
      <label htmlFor="description">Card Description: </label>
      <textarea
        onChange={handleChange}
        id="description"
        cols="30"
        rows="10"
        value={formState.description}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default Modify
