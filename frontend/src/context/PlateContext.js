import { createContext, useReducer } from "react";

export const PlatesContext = createContext()

export const platesReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PLATES': 
            return {
                plates: action.payload
            }
        case 'CREATE_PLATE': 
            return {
                plates: [action.payload, ...state.plates]
            }
        case 'DELETE_PLATE':
            return{
                plates: state.plates.filter((p) => p._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const PlatesContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(platesReducer, {
        plates: null
    })

    

    return (
        <PlatesContext.Provider value={{...state, dispatch}}>
            {children}
        </PlatesContext.Provider>
    )
}
