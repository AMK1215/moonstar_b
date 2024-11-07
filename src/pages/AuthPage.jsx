import React, { useContext, useState } from 'react'
import '../assets/css/auth.css'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { LanguageContext } from '../contexts/LanguageContext'


const AuthPage = () => {
    const [selectedTab,setSelectedTab]=useState(1);
    const { content } = useContext(LanguageContext);

  return (
    <div className='h-screen py-4 '>
      <div className="authContainer gradientBg rounded-3">
        <div className="row authContainerHeader cursor-pointer">
            <div onClick={()=>setSelectedTab(2)} className={`col-6 py-3 px-2 text-center ${selectedTab!==1 && 'authTabBg' } `}>
                <p className='fw-semibold'>{content.auth.register}</p>
            </div>
            <div onClick={()=>setSelectedTab(1)} className={`col-6 py-3  px-2 text-center ${selectedTab!==2 && 'authTabBg' } `}>
                <p className='fw-semibold' >{content.auth.login}</p>
            </div>
        </div>
        <div className="p-4">
            {selectedTab===2 && <>
                <Register content={content} />
             </>}
             {selectedTab===1 && <>
                <Login content={content} />
             </>}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
