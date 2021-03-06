import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
/**
 * Redux root
 */
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'

/**
 * CSS root
 */
import './sass/style.scss'

/**
 * CSS antd
 */
import 'antd/dist/antd.css'

/**
 * App Component
 */
import * as serviceWorker from './serviceWorker'
import App from './root/App'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)

serviceWorker.unregister()
