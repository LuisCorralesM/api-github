import {types} from "../types/types"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { google, facebook } from "../firebase/firebaseConfig"

//accion asincronica
// se debe realizar un dispatch para que se ejecute cuando se resuelve el asincronismo.


export const loginEmailPassword = (email, password) => {
   return (dispatch) => {
   const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=> {
        dispatch(
            loginSincronico(user.uid, email, password)
        )
        alert('Bienvenido')
    })
    .catch(e=> {
        console.log(e)
        alert('El usuario no existe')
    })
   }
}

export const actionGoogle = ()=> {

    //Esta accion devuleve un callback que contiene la funcion asincronica signInWithPopup (then y catch)
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google) // Esta es una promesa que recibe dos parametros, auth: instanci de Auth
        .then(({user})=>{
        dispatch(loginSincronico(user.uid,user.displayName));

        })
        .catch(error=>console.log(error))

    }
}


export const actionFacebook = ()=> {

    //Esta accion devuleve un callback que contiene la funcion asincronica signInWithPopup (then y catch)
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, facebook) // Esta es una promesa que recibe dos parametros, auth: instanci de Auth
        .then(({user})=>{
        dispatch(loginSincronico(user.uid,user.displayName));

        })
        .catch(error=>console.log(error))

    }
}

export const loginSincronico = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id, 
            displayname


        }
    }
}


export const startLogout = () => {
    
    return async (dispatch) => {
        const auth =getAuth()
        await signOut(auth)
        //funcion sincronica
        dispatch(logout())
    }

}

export const logout = () => ({
    type:types.logout
})