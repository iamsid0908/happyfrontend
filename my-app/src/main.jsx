import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./feature/user.jsx"
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"

const store = configureStore({
  reducer:{
    user: userReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store ={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
