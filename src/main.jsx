import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import "./assets/style/index.css"
import Routing from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
