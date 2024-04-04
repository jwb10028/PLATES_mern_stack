import { usePlatesContext } from "../hooks/usePlatesContext"

//date
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PlateDetails = ({plate}) => {
    const {dispatch} = usePlatesContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/plates/' + plate._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PLATE', payload: json})
        }
    }
    
    return (
        <div className="plate-details">
            <h4>{plate.title}</h4>
            <p><strong>Genre: </strong>{plate.genre}</p>
            <p><strong>Description: </strong>{plate.description}</p>
            <p><strong>Privacy: </strong>{plate.privacy}</p>
            <p>{formatDistanceToNow(new Date(plate.createdAt), { addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default PlateDetails