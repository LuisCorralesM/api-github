import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PaginaLogin from '../pages/PaginaLogin'

const AppRouter2 = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path = {["/ruta1", "/ruta2"]}>
                    <PublicLayout>
                        <Switch>
                            <Route path = "/ruta1">
                                <PaginaLogin/>
                            </Route>

                        </Switch>

                    </PublicLayout>

                </Route>

            </Switch>
            </BrowserRouter>

            
        </div>
    )
}

export default AppRouter2
