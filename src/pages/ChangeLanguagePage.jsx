import React from 'react'
import en from '../assets/images/en.png'
import mm from '../assets/images/mm.png'
import { FaRegCheckCircle } from 'react-icons/fa'

const ChangeLanguagePage = () => {
  return (
    <div className='p-3 py-4'>
        <h5 className="fw-semibold text-center mb-4 text-center">Change Language</h5>
        <div className="d-flex mb-4 align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-3'>
            <img src={en} className='flag' />
            <p>English</p>
            </div>
            <FaRegCheckCircle size={25} className='text-success' />
        </div>
        <div className="d-flex mb-4 align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-3'>
            <img src={mm} className='flag' />
            <p>Myanmar</p>
            </div>
        </div>
        <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
            Submit
        </button>
    </div>
  )
}

export default ChangeLanguagePage
