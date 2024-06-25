import React, { useState } from 'react';
import Header from './Header';
import Background from './Background';
import { Link } from 'react-router-dom';


const Landing = () => {

  const [email, setEmail] = useState('');

  const onEmailEdit = (e) => {
      setEmail(e.target.value);
  }

  return (
    <div className=''>
        <Header />
        
        <div className='w-full absolute text-white text-center mt-80 z-10'>
            
            <h1 className='text-5xl font-extrabold'>Unlimited movies, TV shows and more</h1>
            <p className='text-2xl my-6'>Watch anywhere. Cancel anytime.</p>
            <p className='text-xl mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex justify-center'>
                <input type="text" className='bg-transparent border border-gray-500 rounded p-4 h-12 w-[350px] bg-gray-600 bg-opacity-30' placeholder='Email Address' onChange={onEmailEdit} />
                {/* <button className='h-12 bg-red-600 rounded mx-2 w-[200px] text-xl font-bold'>Get Started {'>'}</button> */}
                <Link to='/signup' email={email}  className='h-12 bg-red-600 rounded mx-2 w-[200px] text-xl font-bold pt-2'>Get Started {'>'}</Link>
            </div>
        </div>
        <Background />
    </div>
  )
}

export default Landing;