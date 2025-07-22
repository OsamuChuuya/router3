import React from 'react'
import text from '../assets/Text.png';
import rect from '../assets/rect.png';
import Footer2 from './Footer2';
import True from './True';

const About = () => {
  return (
    <div className='w-[1440px] mx-auto'>
       <div className='w-full h-[226px] text-center bg-[#01AEE7] content-center py-[69px] px-[274px]'><h1 className='font-bold text-3xl uppercase w-[893px] h-[129px] text-center'>TRUE - СОВЕРШЕННОE <br /> ФИТНЕС-ОБОРУДОВАНИЕ</h1></div>
       <img src={text} alt="" />

       <div className='w-full  px-[100px] h-[1250px] bg-[#01AEE7] py-[65px]'>
          <h1 className='font-bold text-4xl text-center uppercase'>Наши инновации</h1>
          <div className='flex items-center flex-wrap gap-3  mt-[65px]'>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
            <div className='w-[400px] border-b-2 border-yellow-200 h-[483px] mb-[40px]'>
              <img src={rect} alt="" />
              <p className='font-bold text-2xl mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            </div>
          </div>
       </div>
      <True/>
      <Footer2/>
    </div>
  )
}

export default About