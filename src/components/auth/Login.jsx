import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import BASE_URL from '../../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';
import acc from '../../assets/images/inputAccount.png'
import pw from '../../assets/images/inputPw.png'

export default function Login({content}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { login, loading, error, errMsg } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputData = { 
            user_name: name, 
            password
         };
        //  console.log(inputData);
         
        let url = BASE_URL + '/login';
        await login(url, inputData);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> {content?.profile?.username}
                    </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={acc} className='inputImg mt-1' />
                        <input type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    {error && error.user_name && <span className='text-danger'>*{error.user_name}</span>}
                    {errMsg && <span className='text-danger'>*{errMsg}</span>}
                </div>
                <div className="mb-4">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> {content?.auth?.password}
                    </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={pw} className='inputImg mt-1' />
                        <input type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    {error && error.password && <span className='text-danger'>*{error.password}</span>}
                </div>
                <button type='submit' className="btn2 fw-semibold mt-3 text-white w-full py-2 text-center rounded-3">
                    {loading ? <Spinner className='me-1' animation="border" size="sm" /> : ""}
                    {content?.auth?.login}
                </button>
            </form>
        </>
    )
}
