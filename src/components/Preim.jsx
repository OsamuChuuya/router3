import React from 'react'
import True from './True'
import Footer2 from './Footer2'
import Preimsec from './Preimsec'

const Preim = () => {
  return (
    <div className='w-[1440px] mx-auto'>
       <div className='w-full h-[315px] text-center bg-[#01AEE7] content-center py-[55px] px-[274px]'>
        <p className='font-bold text-base text-[#FFFF19] mb-[43px] text-center'>НАШИ ПРЕИМУЩЕСТВА</p>
        <h1 className='font-bold text-3xl uppercase w-[893px] h-[129px] text-center'>Преимущества TRUE FITNESS</h1>
        <p className='font-bold text-base text-center w-[920px] mx-auto uppercase mt-[-43px]'>Благодаря которым мы являемся мировым лидером в производстве фитнес- <br /> оборудования</p>
        </div>
        <Preimsec/>
        <True/>
        <Footer2/>
    </div>
  )
}

export default Preim