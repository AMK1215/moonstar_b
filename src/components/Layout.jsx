import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import FooterProviders from './FooterProviders'
import {Toaster} from 'react-hot-toast'
import { AuthContextProvider } from '../contexts/AuthContext'
const Layout = () => {
  return (
    <AuthContextProvider>
      <div className='container'>
        <Toaster />
        <Navbar/>
        <Outlet/>
        <FooterProviders/>
        <Footer/>
      </div>
    </AuthContextProvider>
  )
}

export default Layout
