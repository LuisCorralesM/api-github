import { typesProducto } from "../types/types";

const initialState = {
    productos: [],
    editProducto: {
        nombre: "",
        descripcion:"",
        fecha:"",
        imagen:""
        
    }
}


export const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.register:
            return { productos: [action.payload] }
        case typesProducto.list:
            return {
                productos: [...action.payload]
            }
        case typesProducto.active:
            return {
               ...state, 
               editProducto:action.payload
            }


        case typesProducto.delete:
            return {
                productos: state.productos.filter(prod => prod.nombre !== action.payload)
            }
        default:
            return state

    }
}




