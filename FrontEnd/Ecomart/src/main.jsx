import React from 'react'
import store from '../Redux-store/Centralstore/store.js'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "aos/dist/aos.css" //aos css 
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Provider store={store}>
 <App />

 </Provider>
</BrowserRouter>

)
