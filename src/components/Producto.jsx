import React from 'react'
import { useSelector } from 'react-redux'

const Producto = () => {

    const {productos} = useSelector(store =>store.producto)

    const {nombre} = productos

    return (
        <>
        <div>
            <h1> {nombre} </h1>
            
        </div>
        <div>
        <h1> Tarjeta del producto </h1>
        
        </div>
        </>
    )
}

export default Producto
