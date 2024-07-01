import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global-styles.css'
import Home from './containers/Home/home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
