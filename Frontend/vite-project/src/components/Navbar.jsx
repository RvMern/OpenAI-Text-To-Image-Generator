import React from 'react'
import {Link} from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import aiImage from '../assets/aiLogo.png';

const Navbar = () => {
  const handleNavbar = (e) => {
    document.getElementById('toggleNavbar').classList.toggle('hidden');
    document.getElementById('close-bar').classList.toggle('hidden');
    document.getElementById('open-bar').classList.toggle('hidden');
  };

  return (
    <div className='bg-violet-500'>
        <nav>
            {/* // ! Show this on medium screen */}
            <div className='hidden md:flex md:justify-between md:px-5 md:py-2'>
                <img className='md:block md:w-20 md:h-20 object-cover'  src={aiImage} alt="ai Logo" />
                <ul className='md:flex md:justify-center items-center'>
                    <li className='py-1 w-40 text-center m-1'><Link className='hover:text-emerald-400' to='/'>View Images</Link></li>
                    <li className='py-1 w-40 text-center m-1'><Link className='hover:text-emerald-400' to='/generate-image'>Generate Image</Link></li>
                </ul>
            </div>
            
            {/* // !  */}
            <div className='flex flex-col md:hidden'>
                <div className='py-2 px-6 flex justify-between items-center'>
                    <img className='w-20 h-20 md:w-20 md:h-20 object-cover'  src={aiImage} alt="ai Logo" />
                    <FaBarsProgress id='open-bar' onClick={handleNavbar} className='lg:text-4xl text-2xl cursor-pointer hover:text-white'/>
                    <MdOutlineClose id='close-bar' onClick={handleNavbar} className='hidden lg:text-4xl text-2xl cursor-pointer hover:text-white'/>
                </div>
                <div id='toggleNavbar' className='bg-slate-200 mt-2 hidden px-6'>
                    <ul className='flex flex-col justify-center items-center'>
                        <li className='w-60 text-center m-2'><Link className='hover:text-indigo-600 font-medium' to='/'>View Images</Link></li>
                        <li className='w-60 text-center m-2'><Link className='hover:text-indigo-600 font-medium' to='/generate-image'>Generate Image</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar