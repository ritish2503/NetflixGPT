import React, { useRef, useState } from 'react';
import Background from './Background';
import { LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';
import { checkValidData } from '../utils/validate';

const Login = () => {

    const [errMsg, setErrMsg] = useState(null);
    const [emailMsg, setEmailMsg] = useState(null);
    const [passwordMsg, setPasswordMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLoginValidation = () => {
        //Validate form data
        if(email.current.value !== '' && password.current.value !== ''){
            const msg = checkValidData(email.current.value, password.current.value);
            if(msg !== null){
                setErrMsg(msg);
            }else {
                setErrMsg(null);
            }
        }
    }

    const emailBlur = () => {
        if(email.current.value === ''){
            setEmailMsg('Please enter a valid email address.');
        }else {
            setEmailMsg(null);
        }
    }

    const passwordBlur = () => {
        if(password.current.value.length<4 || password.current.value.length>60){
            setPasswordMsg('Your password must contain between 6 to 60 characters.');
        }else {
            setPasswordMsg(null);
        }
    }

  return (
    <div className=''>
        <div className='w-full absolute z-10'>
            <img className='w-48 ml-44' src={LOGO} alt="Netflix Logo" />

            <div className='w-[30%] m-auto bg-black bg-opacity-60 mt-12 text-white pb-16'>
                <h1 className='text-3xl font-bold px-16 pt-16 pb-6'>Sign In</h1>
                {errMsg && 
                    <div className='mx-16 my-6 p-4 text-black bg-yellow-600 rounded'>
                        <p className='font-semibold'>Incorrect password for {email.current.value}</p>
                        <p>You can reset your password or try again.</p>
                    </div>
                }
                
                <form className='flex flex-col px-16' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" ref={email} onBlur={emailBlur} placeholder='Email' className='w-full h-12 bg-gray-700 border border-gray-500 bg-opacity-30 rounded my-4 p-4' />
                    {emailMsg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {emailMsg}</p>}
                    <input type="password" ref={password} onBlur={passwordBlur} name="pass" id="pass" placeholder='Password' className='w-full h-12 bg-gray-700 border border-gray-500 bg-opacity-30 rounded my-4 p-4' />
                    {passwordMsg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {passwordMsg}</p>}
                    <button className='w-full h-12 bg-red-600 rounded my-4' onClick={handleLoginValidation}>Sign In</button>
                </form>
                <p className='text-center'>Forgot Password?</p>   
                <p className='px-16 py-6 text-gray-400'>New to Netflix? <span className='font-semibold text-white'><Link to='/'>Sign up now.</Link></span></p>
            </div>
        </div>
        <Background />
    </div>
  )
}

export default Login;