import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constants';
import { addEmail } from '../utils/userSlice';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [nameMsg, setNameMsg] = useState(null);
    const [contactMsg, setContactMsg] = useState(null);
    const [emailMsg, setEmailMsg] = useState(null);
    const [password1Msg, setPassword1Msg] = useState(null);
    const [password2Msg, setPassword2Msg] = useState(null);

    const name = useRef(null);
    const contact = useRef(null);
    const password1 = useRef(null);
    const password2 = useRef(null);
    

    const email = useSelector(state => state.user.email);
    console.log('Email :', email );
    const dispatch = useDispatch();


    const onEmailEdit = (e) => {
        dispatch(addEmail(e.target.value));
    }

    //Form Validations
    const nameBlur = () => {
      if(name.current.value === ''){
          setNameMsg('Name is required.');
      }else {
          setNameMsg(null);
      }
    }

    const emailBlur = () => {
      if(email === ''){
          setEmailMsg('Email is required.');
      }else {
          setEmailMsg(null);
      }
    }

    const contactBlur = () => {
      if(contact.current.value === ''){
          setContactMsg('Contact Number is required.');
      }else {
          setContactMsg(null);
      }
    }

    const password1Blur = () => {
      if(password1.current.value.length<4 || password1.current.value.length>60){
          setPassword1Msg('Your password must contain between 6 to 60 characters.');
      }else {
          setPassword1Msg(null);
      }
    }

    const password2Blur = () => {
      if(password1.current.value !== password2.current.value){
          setPassword2Msg('Passwords do not match.');
      }else {
          setPassword2Msg(null);
      }
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
                <input onBlur={nameBlur} ref={name} className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Name'/>
                {nameMsg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {nameMsg}</p>}
                <input onBlur={contactBlur} ref={contact} className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Contact no.'/>
                {contactMsg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {contactMsg}</p>}
                <input onBlur={emailBlur} className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-2 p-4' type="text" placeholder='Enter Email' value={email} onChange={onEmailEdit} />
                {emailMsg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {emailMsg}</p>}
                <input onBlur={password1Blur} ref={password1} className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-4 p-4' type="password" placeholder='Add Password' name="pass1" id="pass1" />
                {password1Msg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {password1Msg}</p>}
                <input onBlur={password2Blur} ref={password2} className='w-full h-12 border border-gray-700 bg-opacity-30 rounded my-4 p-4' type="password" placeholder='Confirm Password' name="pass2" id="pass2" />
                {password2Msg && <p className='text-sm -my-3 mb-2 text-red-600'>❌ {password2Msg}</p>}
                <button className='w-full h-12 bg-red-600 rounded my-4'>Sign Up</button>
            </form>  
        </div>

    </div>
  )
}

export default Signup;