import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
// import Crud from '../components/Crud'
import { CrudProducto } from "../components/CrudProducto"
import PaginaPrincipal from '../pages/PaginaPrincipal'

const DashBoardRouter = () => {
    return (

        <Switch>
            <Route
                exact
                path="/crud"
                component={CrudProducto}

            />
            <Route
                exact
                path="/"
                component={PaginaPrincipal}

            />
            <Redirect to="/" />
        </Switch>

    )
}

export default DashBoardRouter
