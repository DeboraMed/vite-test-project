import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import './index.css'
import Parrafo from './Parrafo.jsx'

// aqui es donde van los imports de los componentes, tambien se muestran como en el aap.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    <Button/>
    <Parrafo text="esto es el parrafo"/>
  </React.StrictMode>,
)
