import React from 'react';
import Background from './Background';
import { LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className=''>
        <div className='w-full absolute z-10'>
            <img className='w-48 ml-44' src={LOGO} alt="Netflix Logo" />

            <div className='w-[30%] m-auto bg-black bg-opacity-60 mt-12 text-white pb-16'>
                <h1 className='text-3xl font-bold px-16 pt-16 pb-6'>Sign In</h1>
                <div className='flex justify-center'>
                    <form className='px-16'>
                        <input type="text" placeholder='Email or Mobile Number' className='w-full h-12 bg-gray-700 border border-gray-500 bg-opacity-30 rounded my-4 p-4' />
                        <input type="password" name="password" id="password" placeholder='Password' className='w-full h-12 bg-gray-700 border border-gray-500 bg-opacity-30 rounded my-4 p-4' />
                        <button className='w-full h-12 bg-red-600 rounded my-4'>Sign In</button>
                    </form>
                </div>
                <p className='text-center'>Forgot Password?</p>
                
                <p className='px-16 py-6 text-gray-400'>New to Netflix? <span className='font-semibold text-white'><Link to='/'>Sign up now.</Link></span></p>
            </div>
        </div>
        <Background />
    </div>
  )
}

export default Login;