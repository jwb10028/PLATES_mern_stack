import { useState } from "react"
import { usePlatesContext } from "../hooks/usePlatesContext";

const PlateForm = () => {
    const { dispatch } = usePlatesContext()
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')
    const [privacy, setPrivacy] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const plate = {title, genre, description, privacy}

        const response = await fetch('/api/plates', {
            method: 'POST',
            body: JSON.stringify(plate),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setTitle('')
            setGenre('')
            setDescription('')
            setPrivacy('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added', json)
            dispatch({type: 'CREATE_PLATE', payload: json})
        }
    }

    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new plate</h3>

        <label>Plate Title: </label>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label>Plate Genre: </label>
        <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            className={emptyFields.includes('genre') ? 'error' : ''}
        />
        <label>Plate Description: </label>
        <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={emptyFields.includes('description') ? 'error' : ''}
        />
        <label>Plate Privacy : </label>
        <input
            type="number"
            onChange={(e) => setPrivacy(e.target.value)}
            value={privacy}
            className={emptyFields.includes('privacy') ? 'error' : ''}
        />
        <button>Add Plate</button>
        {error && <div className="error">{error}</div>}
      </form> 
    )
}

export default PlateForm