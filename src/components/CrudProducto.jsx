import React, {useEffect, useState}  from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/fileUpload';
import { agregarAsincrono, Edit, listAsincronica } from '../actions/actionProducto';
import { ListarProductos } from './ListarProducto';
import {activeProduct} from "../actions/actionProducto"

export const CrudProducto = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset, setValues] = useForm({
        nombre: "",
        cedula:"",
        fecha:"",
        correo:"",
        github:"",
        imagen:""
    })

    let { nombre, cedula, fecha, correo, github, imagen } = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(agregarAsincrono(nombre, cedula, fecha, correo, github, imagen));
        reset();
    }

    const handlePictureClick = () => {
         document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    // useEffect(() => {
    //     dispatch(listAsincronica());
    //   }, [dispatch])

      const [editForm, setEditform] = useState(false)
      const handleEdit = (producto) => {
        
          dispatch(activeProduct(producto.id, producto))
           setEditform(true) 
           setValues ({
               ...producto
           })
        }
        const handlePut = (e)=> {
            e.preventDefault();
            dispatch(Edit(values))
            reset()
            setEditform(false)
        }


    return (
        <div className = "crud-container">

            <form>
                <h1> Zona de gestión de candidatos </h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombre y apellidos del candidato </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange} 
                        required
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres"> Cédula </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="cedula" 
                        id="cedula"
                        value={cedula}
                        onChange={handleInputChange}
                        required
                         />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Fecha de nacimiento </label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                        value={fecha}
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Correo Electrónico </label>
                        <input 
                        className="form-control" 
                        type="email" 
                        name="correo" 
                        id="correo" 
                        value={correo}
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Usuario Github </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="github" 
                        id="github" 
                        value={github}
                        onChange={handleInputChange}/>
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn btn-secondary"
                           onClick={handlePictureClick} type="button"> Subir imagen de producto </button>
                    </div>


                    

                    <div>

                        
                    <div className="d-grid gap-2 mx-auto">
                            {
                                !editForm
                                    ?
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick = {handleRegistro}>Enviar</button>
                                    :
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick={handlePut}>Guardar</button>

                            }
                        </div>
                    </div>

                   
                </div>
            </form>
        
            <ListarProductos handleEdit = {handleEdit}/>
            
        </div>
    )
}
