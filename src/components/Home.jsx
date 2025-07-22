import React from 'react'
import bg1 from '../assets/bg1.png';
import pause from '../assets/pause.png';
import slider from '../assets/slider.png';
import S from './S';
import Sth from './sth';
import Footer from './Footer';
const Home = () => {
  return (
    <div className='w-[1440px]  mx-auto'>
        <div 
            className=" h-[672px] bg-no-repeat bg-cover mt-[14px] bg-center"
            style={{ backgroundImage: `url(${bg1})` }}
            >
            <div className='w-[861px] mx-auto text-center pt-[269px]'>
            <img src={pause} alt="" className='mx-auto' />
            <h1 className='font-bold text-5xl uppercase leading-[100%]'>TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США</h1>
            </div>
        </div>
            <div className='w-full h-[266px] text-center bg-[#01AEE7] content-center py-[69px] px-[274px]'><h1 className='font-bold text-3xl uppercase w-[893px] h-[129px] text-center'>TRUE - ведущий мировой производитель премиального фитнес оборудования</h1></div>
        <div className='w-full py-[60px]'>
            <img src={slider} alt="" className='mx-auto'/>
        </div>
        <S/>
        <Sth/>
        <Footer/>
    </div>
  )
}

export default Home