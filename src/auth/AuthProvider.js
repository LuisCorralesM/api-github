// import React, {useState, createContext} from 'react'
// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {
    
//     const [user, setUser] = useState(null)
//     const contextValue = {
//         user,
//         login() {
//             setUser({id:1, userName:"luis50"})

//         },
//         logout (){
//             setUser(null);
            
//         },
//         isLogged() {
//             return !!user // Si el usuario existe devuelve true y sino devuelve false
//         }
//     }
//     // si no hay children no esta aceptando el componente que esta envolviendo
//     return (
//         <AuthContext.Provider value = {contextValue}>
//             {children}   
//         </AuthContext.Provider>
//     )
// }


// export default AuthProvider
