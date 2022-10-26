import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import images from '../images.js'

const Create = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    keywords: '',
    reverseKeywords: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/cards', formState)
    // setFormState(initialState)
    setFormState(formState.keywords.split(' '))
    setFormState(formState.reverseKeywords.split(' '))
    navigate('/mycards')
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // useEffect(() => {
  //   setFormState(formState.keywords.split(' '))
  //   setFormState(formState.reverseKeywords.split(' '))
  // }, [])

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <div className="left">
        <label htmlFor="name">Card Name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="createCardImage">Card Image:</label>
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
      </div>
      <div className="right">
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
      </div>
    </form>
  )
}

export default Create
