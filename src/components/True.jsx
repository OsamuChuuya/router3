import React from 'react'
import Rectangle from '../assets/Rectangle.png'

const True = () => {
  return (
    <div>
           <div className=" h-[717px] bg-no-repeat bg-cover py-[55px] bg-center"
            style={{ backgroundImage: `url(${Rectangle})` }}>
              <div className='w-[1318px] bg-[#120E0E5E] mx-auto pt-[38px] h-[618px]'>
                <h3 className='font-bold text-base text-[#FFFF19] mb-[64px] text-center'>TRUE FITNESS</h3>
                <h1 className='text-4xl font-bold text-[#01AEE7] w-[621px] h-[196px] text-center uppercase mx-auto'><span className='text-white'>Получите</span> <br /> эксклюзивное <br /> предложение <span className='text-white'>на <br /> тренажеры</span> TRUE FITNESS</h1>
                <p className='font-bold text-base text-[#FFFF19] mb-[64px] text-center'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                <div className='flex gap-6'>
                    <input type="text" placeholder='NAME' className='w-[296px] h-[60px] bg-[#D9D9D9] p-2 text-black' />
                    <input type="text" placeholder='+998 99-999-99-99' className='w-[296px] h-[60px] bg-[#D9D9D9] p-2 text-black' />
                    <input type="text" placeholder='E-MAIL' className='w-[296px] h-[60px] bg-[#D9D9D9] p-2 text-black' />
                    <button className='w-[295px] h-[60px] bg-[#01AEE7] '>ОТПРАВИТЬ</button>
                </div>
                    <p className='text-white text-center mt-2 w-[767px] mx-auto text-base font-bold'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>

              </div>
        </div>
    </div>
  )
}

export default True