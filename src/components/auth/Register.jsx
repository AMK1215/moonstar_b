import React, { useState } from 'react'
import ph from '../../assets/images/inputPhone.png'
import acc from '../../assets/images/inputAccount.png'
import pw from '../../assets/images/inputPw.png'
import useRegister from '../../hooks/useRegister';
import BASE_URL from '../../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';

export default function Register({content}) {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [refCode, setRefCode] = useState("");

    const { register, loading, error, errMsg } = useRegister();
    const handleRegister = async (e) => {
        e.preventDefault();
        let url = BASE_URL + "/register";
        let inputData = {
            phone,
            name,
            password,
            password_confirmation,
            referral_code: refCode
        }
        await register(url, inputData);
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="mb-3">
                <small className='mb-2 d-block'>
                    <span className="text-danger">*</span> {content?.auth?.phone}
                </small>
                <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                    <img src={ph} className='inputImg mt-1' />
                    <input type="text"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                {error && error.phone && <small className='text-danger'>{error.phone}</small>}
            </div>
            <div className="mb-3">
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
                {error && error.name && <small className='text-danger'>{error.name}</small>}
            </div>
            <div className="mb-3">
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
                {error && error.password && <small className='text-danger'>{error.password}</small>}
            </div>
            <div className="mb-3">
                <small className='mb-2 d-block'>
                    <span className="text-danger">*</span> {content?.auth?.confirm_password}
                </small>
                <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                    <img src={pw} className='inputImg mt-1' />
                    <input type="password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={password_confirmation}
                    />
                </div>
                {error && error.password_confirmation && <small className='text-danger'>{error.password_confirmation}</small>}
            </div>
            <div className="mb-3">
                <small className='mb-2 d-block'>
                    <span className="text-danger">*</span> {content?.auth?.ref_code}
                </small>
                <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                    <img src={ph} className='inputImg mt-1' />
                    <input type="text"
                        onChange={e => setRefCode(e.target.value)}
                        value={refCode}
                    />
                </div>
                {error && error?.referral_code && <small className='text-danger'>{error?.referral_code}</small>}
            </div>
            <button type='submit' className="btn2 fw-semibold mt-3 text-white w-full py-2 text-center rounded-3">
                {loading ? <Spinner size='sm' className='me-2' /> : ""}
                {content?.auth?.register}
            </button>
        </form>
    )
}
