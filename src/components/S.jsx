import React from 'react'
import velo from '../assets/velo.png';
const S = () => {
  return (
    <div className='w-full flex gap-3 items-center mt-[70px] pb-[90px] mx-[26px]'>
      <div>
         <img src={velo} alt="" />
        <div className='w-[684px] h-[213px] bg-[#01AEE7] pt-[21px] px-[53px] mt-[17px]'>
          <h2 className='font-bold text-3xl mb-[16px]'>ВЫСОКОЕ КАЧЕСТВО <br /> И НАДЕЖНОСТЬ</h2>
          <hr className='text-yellow-400' />
          <p className='w-[585px] h-[66px] font-normal text-[18px] mt-[18px]'>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
        </div>
      </div>
      <div>
        <div className='w-[684px] h-[213px] bg-[#01AEE7] pt-[21px] px-[53px] mb-[17px]'>
          <h2 className='font-bold text-3xl mb-[16px]'>ВЫСОКОЕ КАЧЕСТВО <br /> И НАДЕЖНОСТЬ</h2>
          <hr className='text-yellow-400' />
          <p className='w-[585px] h-[66px] font-normal text-[18px] mt-[18px]'>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
        </div>
        <img src={velo} alt="" />
      </div>
    </div>
  )
}

export default S