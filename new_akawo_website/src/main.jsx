import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
)