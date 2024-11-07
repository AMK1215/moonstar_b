import React, { useContext } from 'react'
import logo from '../assets/images/logo.jpg'
import profile from '../assets/images/profile.png'
import { Link } from 'react-router-dom'
import { AiOutlineDollar } from 'react-icons/ai'
import { IoMdRefreshCircle } from 'react-icons/io'
import { AuthContext } from '../contexts/AuthContext'
import LanguageDropdown from './LanguageDropdown'

const Navbar = () => {
  const { user } = useContext(AuthContext);


  return (
    <div className='nav d-flex align-items-center justify-content-between py-2 px-2'>
      <Link to={'/'}>
      <img src={logo} 
      width={"200px"}
      // className='logo' 
      />
      </Link>
      {/* <div className="d-flex align-items-center gap-2">
        <Link to={'/auth'} className="btn1  text-white rounded-2 px-3">
            <small>Register</small>
        </Link>
        <Link to={'/auth'} className="btn2  text-white rounded-2 px-3">
            <small>Login</small>
        </Link>
      </div> */}
      <div className="d-flex align-items-center gap-sm-2">
        <div>
          
          <p className='fw-semibold'>{user?.user_name}</p>
          <div  className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <AiOutlineDollar size={22} color='#FECB00' />
            <small className="fw-semibold">{user?.balance}</small>
          </div>
          <IoMdRefreshCircle size={26} color='#00EF2C' />
          </div>
        </div>
        <LanguageDropdown />
      </div>
    </div>
  )
}

export default Navbar
