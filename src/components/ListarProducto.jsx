import { PhoneMultiFactorGenerator } from '@firebase/auth'
import React, { useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { agregarAsincrono, deleteAsincrono } from '../actions/actionProducto'
export const ListarProductos = ({handleEdit}) => {
   const {productos} =  useSelector(store => store.producto )
//    console.log(productos)
   const dispatch = useDispatch()

   useEffect(() => {
       dispatch(agregarAsincrono)
   }, [dispatch])

    return (
        <div>
            <h1> Candidatos </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha ingreso</th>
                        <th>Correo</th>
                        <th>Github</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                        (productos) ?
                            (
 
                                productos.map((element, index) => (
 
                                    <tr key={index}>
                                        <td>{element.nombre}</td>
                                        <td>{element.cedula}</td>
                                        <td>{element.fecha}</td>
                                        <td>{element.correo}</td>
                                        <td>{element.github}</td>
                                        <td><img src={element.imagen} alt="" width="50px" /></td>
 
                                        <td>
                                        <button className ="btn btn-secondary" onClick = {()=>handleEdit(element)} 
                                       >Editar </button>
                                            <button className ="btn btn-danger" onClick = {()=>dispatch(deleteAsincrono(element.nombre))}
                                       >Eliminar</button>
                                       
                                        </td>
 
                                    </tr>
                                )
                                )
 
                            ) :
                            <p>Datos no disponibles</p>
                    }


                </tbody>
                
            </Table>
            
        </div>
    )
}