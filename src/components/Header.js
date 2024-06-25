import React from 'react';
import { LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full absolute bg-gradient-to-b from-black flex justify-between z-10'>
        <div className='ml-44'>
            <img className='w-48' src={LOGO} alt="Netflix Logo" />
        </div>
        <div className='flex mr-44 text-white'>
            <select className='bg-transparent border border-gray-500 rounded h-8 px-8 my-8' name="language" id="language">
                <option className='text-black' value="lan_english">English</option>
                <option className='text-black' value="lan_hindi">हिंदी</option>
            </select>
            {/* <button className='px-4 m-8 h-8 bg-red-500 rounded'>Sign In</button> */}
            <Link className='px-4 pb-2 pt-1 mx-6 my-8 h-8 bg-red-600 rounded' to='/login'>Sign In</Link>
        </div>
    </div>
  )
}

export default Header;