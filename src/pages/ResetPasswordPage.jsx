import React, { useContext, useState } from 'react'
import useFormSubmit from '../hooks/useFormSubmit';
import BASE_URL from '../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

const ResetPasswordPage = () => {
  const { content } = useContext(LanguageContext)
  const [current_password, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const { inputSubmit, error, loading } = useFormSubmit();
  const change = async (e) => {
    e.preventDefault();
    let url = BASE_URL + "/changePassword";
    let inputData = { current_password, password, password_confirmation };
    let method = "POST";
    let redirect = '/profile';
    let msg = "Password Changed Successfully";
    await inputSubmit(url, inputData, method, redirect, msg);
  }

  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">{content?.profile?.change_password}</h5>
      <form onSubmit={change}>
        <div className="mb-3">
          <small className="customInputTitle">{content?.profile?.old_password}</small>
          <input type="password" 
          className='w-full customInput' 
          onChange={(e) => setCurrentPassword(e.target.value)}
          value={current_password}
          />
          {error && error.current_password && <small className="text-danger">{error.current_password}</small>}
        </div>
        <div className="mb-3">
          <small className="customInputTitle">{content?.profile?.new_password}</small>
          <input type="password" 
          className='w-full customInput' 
          onChange={e => setPassword(e.target.value)}
          value={password}
          />
          {error && error.password && <small className="text-danger">{error.password}</small>}
        </div>
        <div className="mb-3">
          <small className="customInputTitle">{content?.profile?.confirm_password}</small>
          <input type="password" 
          className='w-full customInput' 
          onChange={e => setPasswordConfirmation(e.target.value)}
          value={password_confirmation}
          />
          {error && error.password_confirmation && <small className="text-danger">{error.password_confirmation}</small>}
        </div>
        <button type='submit' className="mt-4 py-2 text-white btn2 w-full rounded-5">
          {loading && <Spinner className='me-2' size="sm" />}
          {content?.btn?.submit}
        </button>
      </form>
    </div>
  )
}

export default ResetPasswordPage
