import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import { FaRegCopy } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import useFormSubmit from '../hooks/useFormSubmit';
import { Spinner } from 'react-bootstrap';

const DepositPage = () => {
    const {data:banks} = useFetch(BASE_URL + '/agent-payment-type');
    const [paymentType, setPaymentType] = useState();
    const bank = banks && banks.find(bank => bank.id == parseInt(paymentType ?? banks[0]?.id));
    const [amount, setAmount] = useState(0);
    const [transNo, setTransNo] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        setPaymentType(bank && bank?.id);
    }, [bank]);
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(bank?.account_no);
        toast.success("Copied", {
            position: "top-right",
            autoClose: 1000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true
        })
    }
    // console.log(paymentType);
    
    const {inputSubmit, error, loading} = useFormSubmit();
    const deposit = async (e) => {
        e.preventDefault();
        let inputData = {
            agent_payment_id: paymentType,
            amount: amount,
            refrence_no: transNo,
            note: note
        }
        let url = BASE_URL + '/transaction/deposit';
        let method = 'POST';
        let redirect = "/wallet";
        let msg = "Deposit Successful";
        inputSubmit(url, inputData, method, redirect, msg);
    }


    return (
        <div className='depositBg p-3'>
            <ToastContainer />
            <h5 className="fw-semibold text-center mb-4 text-center">Deposit</h5>
            <div className="border border-light bg-transparent rounded-4 p-2 my-3 shadow-lg">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div>
                            <img className="rounded-3 shadow" src={bank?.payment_type?.image_url} width={50} alt="" />
                        </div>
                        <div className="ms-2">
                            <h6 className="fw-bold">{bank?.account_name}</h6>
                            <h6 className="fw-bold">{bank?.account_no}</h6>
                        </div>
                    </div>
                    <div>
                        <button className="btn text-white" onClick={handleCopyText}>
                            <FaRegCopy size={25} />
                        </button>
                    </div>
                </div>

            </div>
            <form onSubmit={deposit}>
                <div className="mb-3">
                    <small className="customInputTitle">Choose Bank</small>
                    <select className='w-full mt-2 rounded-2  py-1 px-2 customInput  text-white bg-transparent'
                    onChange={e => setPaymentType(e.target.value)}
                    >
                        {banks && banks.map((bank, index) => (
                            <option key={index} value={bank.id}>{bank.payment_type.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <small className="customInputTitle">Amount</small>
                    <input type="number" 
                    className='w-full customInput' 
                    placeholder='Enter amount'
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                    />
                    {error && error.amount && <span className='text-danger'>{error.amount}</span>}
                </div>
                <div className="mb-3">
                    <small className="customInputTitle">Receipt No (last 6 digits)</small>
                    <input type="number" 
                    className='w-full customInput' 
                    placeholder='Enter receipt no'
                    onChange={e => setTransNo(e.target.value)}
                    value={transNo}
                    />
                    {error && error.refrence_no && <span className='text-danger'>{error.refrence_no}</span>}
                </div>
                <div className="mb-3">
                    <small className="customInputTitle">Note</small>
                    <textarea className='w-full customInput bg-transparent' 
                    placeholder='Enter note'
                    onChange={e => setNote(e.target.value)}
                    value={note}
                    ></textarea>
                    {error && error.note && <span className='text-danger'>{error.note}</span>}
                </div>
                <button type='submit' className="mt-4 py-2 text-white btn2 w-full rounded-5">
                    {loading && <Spinner size={20} className='me-2' />}
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DepositPage
