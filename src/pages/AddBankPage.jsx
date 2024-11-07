import React from 'react'

const AddBankPage = () => {
  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">Add Bank</h5>
      <div className="mb-3">
                <small className="customInputTitle">No</small>
                <input type="text" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Name</small>
                <input type="text" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Bank No</small>
                <input type="text" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Bank Type</small>
                <select  className='w-full mt-2 rounded-2  py-1 px-2 customInput  text-black'>
                    <option value="">Kpay</option>
                    <option value="">Wave</option>
                </select>
            </div>
            <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Submit
            </button>
    </div>
  )
}

export default AddBankPage
