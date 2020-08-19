import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { uniqBy } from 'lodash'
import rolesConfig from './roles'

import * as Routes from './routes'

const routesServices = ({ role }) => {
    let roles = []

    if (roles) {
        /**
         * Combine roles
         */
        roles = ['common', role]

        /**
         * Reduce all components
         */
        let allowedRoutes = roles.reduce((acc, indexRole) => {
            return [...acc, ...rolesConfig[indexRole].routes]
        }, [])

        /**
         * For removing duplicate entries, compare with 'url'.
         */
        allowedRoutes = uniqBy(allowedRoutes, 'title')

        /**
         * Collect menu items for the navigation (not all components need to be displayed on the menu)
         */
        // const menuItems = allowedRoutes.filter((item) => item.menu)

        return (
            <Router>
                <Switch>
                    {allowedRoutes &&
                        allowedRoutes.map((route) => {
                            return (
                                <Route
                                    key={route.title}
                                    path={route.url}
                                    component={Routes[route.component]}
                                />
                            )
                        })}
                </Switch>
            </Router>
        )
    }

    return null
}

export default routesServices
