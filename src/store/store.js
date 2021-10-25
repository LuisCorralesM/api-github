
import { loginReducer } from "../reducers/loginReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "../reducers/registerReducer";
import { taskReducer } from "../reducers/taskReducer";
import { productoReducer } from "../reducers/productoReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login:loginReducer,
    register:registerReducer,
    tasks:taskReducer,
    producto: productoReducer
})

export const store = createStore (
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)  // el segundo parametro es el middleware: esto es para la configuracion de un ciclo de vida 
    )
)