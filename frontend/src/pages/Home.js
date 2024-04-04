import { useEffect } from "react";

//components
import PlateDetails from '../components/PlateDetails'
import PlateForm from "../components/PlateForm"
import { usePlatesContext } from "../hooks/usePlatesContext";

const Home = () => {
    
    const {plates, dispatch} = usePlatesContext()
    
    useEffect(() => {
        const fetchPlates =  async()=>{
            const response = await fetch('/api/plates')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_PLATES', payload: json})
            }
        }

        fetchPlates()
    }, [dispatch])
    
    return (
        <div className="home">
            <div className="plates">
                {plates && plates.map((plate) => (
                    <PlateDetails key={plate._id} plate={plate} />
                ))}
            </div>
            <PlateForm/>
        </div>
    )
}

export default Home