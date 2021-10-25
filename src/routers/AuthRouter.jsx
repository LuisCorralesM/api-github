// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import PaginaLogin from '../pages/PaginaLogin';
// import PaginaRegistro from '../pages/PaginaRegistro';

// export const AuthRouter = () => {
//     return (

//         //Arbol con todas las rutas publicas
//         <div className="auth__main">
//             <div className="auth__box-container">
//                 <Switch>
//                     <Route 
//                         exact
//                         path="/auth/login"
//                         component={ PaginaLogin }
//                     />

//                     <Route 
//                         exact
//                         path="/auth/registro"
//                         component={ PaginaRegistro }
//                     />

//                     <Redirect to="/auth/login" />

//                 </Switch>
//             </div>

//         </div>
//     )
// }


//  <PublicRoute
//                     path="/auth"
//                     component={AuthRouter}
//                     isAuthenticated={isLoggedIn}
//                 />
//                 <PrivateRoute
//                 exact
//                  path="/crud"
//                  component={Crud}
//                  isAuthenticated={isLoggedIn}
//                 />
//                 <PrivateRoute
//                 exact
//                  path="/carrito"
//                  component={Carrito}
//                  isAuthenticated={isLoggedIn}
//                 />
//                 <PrivateRoute
//                 exact
//                  path="/"
//                  component={PaginaPrincipal}
//                  isAuthenticated={isLoggedIn}
//                 /> 