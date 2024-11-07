import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'
import 'react-toastify/dist/ReactToastify.css';
import { LanguageContextProvider } from './contexts/LanguageContext'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <RouterProvider router={router} />
    </LanguageContextProvider>
  </React.StrictMode>,
)
