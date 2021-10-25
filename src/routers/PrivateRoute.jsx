import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Navbar from "../components/Navbar"

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <>
        <Navbar/> 
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated  )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}
        />
        </>
    )
}

// PropTypes: ligado a los props que llegan, es un requerimiento.
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}