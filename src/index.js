import React from 'react'
import ReactDOM from 'react-dom'

/** Redux root */
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'

/** CSS root */
import 'antd/dist/antd.css'
import './index.css'

/** App Component */
import * as serviceWorker from './serviceWorker'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)

serviceWorker.unregister()
