import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/bootstrap.min.css'                                  //newly added bootstrap style from bootwatch.com
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   
    <App />                     {/*App should be inside the <BrowserRouter> inorder to route app */}
    </BrowserRouter>
  </React.StrictMode>,
)
