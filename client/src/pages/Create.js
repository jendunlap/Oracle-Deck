import { useState } from 'react'
import axios from 'axios'

const CreateCard = (props) => {
  const initialState = {
    name: '',
    keywords: [],
    reverseKeywords: [],
    description: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/cards', formState)
    console.log(res.data)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Card Name:</label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        value={formState.name}
      />
      <label htmlFor="cardImage">Card Image:</label>
      <select
        onChange={handleChange}
        id="cardImage"
        value={formState.cardImage}
      >
        <option value="" disabled>
          {' '}
          - Select an Image -{' '}
        </option>
        <option value="image1">Image 1</option>
        <option value="image2">Image 2</option>
        <option value="image3">Image 3</option>
      </select>
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

export default CreateCard
