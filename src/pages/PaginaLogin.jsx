import React from 'react'
// import { useHistory, useLocation } from 'react-router'
// import { useAuth } from '../auth/useAuth'
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "../hooks/useForm"
import { useDispatch } from 'react-redux';
import { actionGoogle, loginEmailPassword, actionFacebook } from '../actions/actionLogin';




const PaginaLogin = () => {

    //Uso de useContext para el control de rutas publicas y privadas
    // const history = useHistory() 
    // const location = useLocation()
    // const previousObjectURL = location.state?.from
    // const auth = useAuth()
    //IN
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        // auth.login(); //useContext
        // history.push(previousObjectURL) // añade el resto de direccion para que vaya a carrito
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        // dispatch(actionLogin(email, password)) //disparo de la accion de actionLogin
    }


    //Desestructuracion del useHook 
    const [values, handleInputChange] = useForm({
        email: "",
        password: ""
    })
    //Desesctructuracion de los values
    const { email, password } = values
    const handleGoogle = () => {
        dispatch(actionGoogle())
    }


    const handleFacebook = () => {
        dispatch(actionFacebook())
    }
    return (
        <>


            <Form onSubmit={handleLogin} id="login-form">
                <img alt="logo Amazonas" src="https://res.cloudinary.com/dobboq5dt/image/upload/v1632956691/Sprint%203-%20Amazonas/logo-amazon_mlu12o.png" />
                <br/>
                <h3> Login </h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}


                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}

                    />
                </Form.Group>
                <Button className="btn-login" type="submit" >
                    Login
                </Button>

                <br />
                <br />


                ------------------------- Ó  -------------------------
                <br />
                <br />

                <div className="google-icon-wrapper" onClick={handleGoogle} >
                    Iniciar sesion con Google
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" width="5%" height="5%" />
                </div>
                <div className="google-icon-wrapper" onClick={handleFacebook} >
                    Iniciar sesion con Facebook
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="google button" width="5%" height="5%" />
                </div>


                <p> <Link to="/registro"> Registrarse</Link> </p>

            </Form>

        </>

    )
}

export default PaginaLogin
