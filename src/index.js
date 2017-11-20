import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))

registerServiceWorker()
