// import React from 'react'
// import { Redirect, Route, useLocation } from 'react-router'
// import { useAuth } from '../auth/useAuth'

// export const PrivateRouter = ({ component: Component, ...rest }) => {

//     //{...props} para que mande todas las propiedades.

//     //{...rest}  manda todos menos los que se estan desestructurando de manera individual
//     // component: Component se le debe asignar un aliar para que lo reconozca como un componente
//     // const user = null

//     const {user, login, logout} = useAuth()
//     const location = useLocation()
    
//     return (
//         <div>
//             <Route {...rest}>
                
//                 {
//                     user ? <Component /> : <Redirect to={{pathname:"/login", state:{from:location}}} />
//                 }


//             </Route>

//         </div>
//     )
// }
