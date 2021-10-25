import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registroAsincronico } from '../actions/actionRegister';
import { useFormik } from 'formik';
import * as Yup from 'yup'





const PaginaRegistro2 = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            nombre:"",
            email:"",
            pass1:"",
            pass2:""
            
        },
        validationSchema:   Yup.object({
            nombre:Yup.string().required(),
            email:Yup.string().email().required(),
            pass1:Yup.string().required().oneOf([Yup.ref("pass2")]),
            pass2:Yup.string().required()

        }) ,
        onSubmit:(data) => {
            
            const {nombre, email, pass1} = data;
            dispatch(registroAsincronico(email, pass1, nombre))
        }
    })

    return (
        <>
         <Form id = "login-form" onSubmit = {formik.handleSubmit}>
         <img alt="logo Amazonas" src="https://res.cloudinary.com/dobboq5dt/image/upload/v1632956691/Sprint%203-%20Amazonas/logo-amazon_mlu12o.png" />
                <br/>
                <h3> Registrate en Amazonas </h3>
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                    
                        onChange = {formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>

            <div className = "btn-registro">
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
                <br/>

                <Link  style={{ textDecoration: 'none' }} to="/auth/login"> ¿Ya tiene una cuenta ?</Link>
            </div>
            </Form>
            
        </>
    )
}

export default PaginaRegistro2
