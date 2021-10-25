import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'

const Navbar = ({ history }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.login)

    const handleLogout = () => {
        dispatch(startLogout());
    }


    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white  ">
            <div>
                <button className="btn-link-home">
                    <Link to="/" className="link-home">GitInnova</Link>
                </button>
                <button className="btn-link-gestion">
                    <Link to="/crud" className="link-gestion"> Gestion de candidatos </Link>
                </button>
                <span className="text-white me-2 mensaje-bienvenida"> Bienvenido: {name}</span>
                <button className="btn-logout" onClick={handleLogout}> Logout </button>
            </div>
        </nav>



    )
}

export default Navbar
