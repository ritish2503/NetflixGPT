import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constants';
import { addEmail } from '../utils/userSlice';
import { Link } from 'react-router-dom';

const Signup = () => {

    const email = useSelector(state => state.user.email);
    console.log('Email :', email );
    const dispatch = useDispatch();


    const onEmailEdit = (e) => {
        dispatch(addEmail(e.target.value));
    }


    


  return (
    <div>
        <div className='flex justify-between items-center border-b-2 border-gray-500 border-opacity-10 h-24'>
            <img className='w-48 ml-8' src={LOGO} alt="LOGO" />
            <Link className='text-lg font-bold mr-12' to='/login'>Sign In</Link>
        </div>
        
        <div className='w-[30%] m-auto bg-opacity-60 mt-12 pb-16'>
            <h1 className='text-3xl font-bold px-16 pt-16 pb-6'>Sign Up</h1>
            <form className='flex flex-col px-16'>
                <input className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Name'/>
                <input className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Contact no.'/>
                <input className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Email' value={email} onChange={onEmailEdit} />
                <input className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-4 p-4' type="password" placeholder='Add Password' name="pass" id="pass" />
                <button className='w-full h-12 bg-red-600 rounded my-4'>Sign Up</button>
            </form>  
        </div>

    </div>
  )
}

export default Signup;