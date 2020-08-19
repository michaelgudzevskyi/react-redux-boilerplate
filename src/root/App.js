import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

/**
 * Not Auth Pages
 */
import { Auth } from '../pages'

/**
 * General theme portal
 */
import ThemeLayoute from '../layouts/ThemeLayoute'

import AuthRoute from '../util/AuthRoute'

function App() {
    let isAuth = false
    return (
        <Switch>
            <AuthRoute
                exact
                authenticated={isAuth}
                path={['/signin', '/signup', '/signup/verify']}
                component={Auth}
            />
            <Route
                path="/"
                render={() => (isAuth ? <ThemeLayoute /> : <Redirect to="/signin" />)}
            />
        </Switch>
    )
}

export default App
