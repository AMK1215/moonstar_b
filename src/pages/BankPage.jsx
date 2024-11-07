import React from 'react'
import { Button } from 'react-bootstrap'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const BankPage = () => {
  return (
    <div className='p-3 pb-5'>
      <h5 className="fw-semibold mb-4 text-center">My Bank Accounts</h5>
      <div className="text-center">
      <Link to={'/add-bank'}>
      <Button  variant="outline-danger">
       <IoIosAddCircleOutline size={28} /> Add Bank Account
      </Button>
      </Link>
      </div>
    </div>
  )
}

export default BankPage
