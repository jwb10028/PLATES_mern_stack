import { PlatesContext } from "../context/PlateContext"
import { useContext } from "react"

export const usePlatesContext = () => {
    const context = useContext(PlatesContext)


    if (!context){
        throw Error('usePlatesContext Component must be used within the Provider')
    }

    return context
}