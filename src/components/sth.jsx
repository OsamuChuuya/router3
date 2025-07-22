import React from 'react'
import air from '../assets/air.png';
import run from '../assets/run.png';
const sth = () => {
  return (
    <div className='w-full h-[1263px] flex bg-[#EEEEEE] pl-[100px]'>
        <div className='pt-[99px]'>
        <h2 className='text-3xl font-bold text-[#01AEE7] uppercase'>Мы предлагаем  <br />
полный комплекс услуг</h2>
        <div className='flex flex-wrap gap-[126px] items-center '>
            <div className='w-[299px] mt-[70px] h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
            </div>
            <div className='w-[299px] mt-[70px] h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
            </div>
            <div className='w-[299px]  h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
            </div>
            <div className='w-[299px]  h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
            </div>
            <div className='w-[299px] h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Мы доставляем оборудование по всему Узбекистану.</p>
            </div>
            <div className='w-[299px]  h-[225px]'>
                <img src={air} alt="" />
                <h2 className='font-bold text-[18px] text-black mt-[23px] mb-[4px] '>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
                <p className='w-[299px] text-base font-normal text-black'>Мы доставляем оборудование по всему Узбекистану.</p>
            </div>
        </div>
        </div>
        <img src={run} alt="" />
        
    </div>
  )
}

export default sth