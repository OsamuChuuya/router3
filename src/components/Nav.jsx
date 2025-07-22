import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'

const Nav = () => {
  return (
    <nav className='w-[1239px] mx-auto border-b-2 border-gray-600 flex  justify-center gap-[94px] py-[24px]'>
          <Link to="/" className='font-bold text-[15px] text-black uppercase hover:underline'><img src={logo} alt="" /></Link>

        <div>
            <div className='flex items-center gap-[76px]'>
                <img src={flag} alt="" />
                <p className='text-black'>+998 (90)-606-66-66</p>
            </div>
            <button className='w-[238px] h-[36px] bg-[#01AEE7] mt-[33px] '>оставить заявку</button>
        </div>
    </nav>
  )
}

export default Nav