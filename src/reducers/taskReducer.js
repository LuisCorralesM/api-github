import { types } from "../types/types";


// se crea un estado inicial del reducer
const initialState = {
    tasks:[],
    active:{
        id:"",
        url:"",
        nombre:"",
        descripcion:""
    }
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.taksAddNew:
            
            return {
                //informacion del payload. ...state se mantiene la informacion
                ...state, task:[action.payload, ...state.tasks]
            }
        case types.taksLoad: 
            return {
                ...state,
                tasks:[action.payload]
            }
    
        default:
            return state
    }
}
