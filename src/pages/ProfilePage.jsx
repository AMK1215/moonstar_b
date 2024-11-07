import React, { useContext } from 'react'
import profile from '../assets/images/profile.png'
import '../assets/css/profile.css'
import { AuthContext } from '../contexts/AuthContext'
import { LanguageContext } from '../contexts/LanguageContext'

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const { content } = useContext(LanguageContext)
  return (
    <div >
      <div className="gradientBg py-5 text-center">
      <img src={profile} className='profileImg' />
      </div>
      <div className='profileBg rounded-top-5 p-3'>
            <div className="mb-3">
                <small className="customInputTitle">{content?.profile?.username}</small>
                <span className='d-block'>{user?.user_name}</span>
                {/* <input value={user?.user_name} type="text" className='w-full customInput' disabled /> */}
            </div>
            <div className="mb-3">
                <small className="customInputTitle">{content?.profile?.phone}</small>
                <span className='d-block'>{user?.phone}</span>
                {/* <input value={user?.phone} type="text" className='w-full customInput' disabled /> */}
            </div>
            {/* <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Save
            </button> */}
      </div>
    </div>
  )
}

export default ProfilePage
