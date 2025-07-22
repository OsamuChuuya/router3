import React from 'react'
import club from '../assets/club.png'
import Footer2 from './Footer2'

const Club = () => {
  return (
    
    <div className='w-[1400px] mx-auto'>
        <div className='w-full h-[266px] text-center bg-[#01AEE7] content-center py-[69px] px-[274px]'>
          <p className='font-bold text-[#FFF500] text-[18px]'>КЛУБ TRUE</p>
          <h1 className='font-bold text-3xl uppercase w-[893px] h-[129px] text-center'>
            TRUE - ведущий мировой производитель премиального фитнес оборудования
          </h1>
        </div>
        
        <div className='w-full h-[1054px]'>
            <img src={club} alt="" className='mx-[45px] my-[77px]' />
        </div>

        <div className='w-full h-[1547px] pt-[60px] bg-[#D9D9D9]'>
          <div className="w-[426px] mx-auto text-black px-10 py-12">
            <h2 className="text-center font-bold uppercase text-base mb-8">ОТПРАВИТЬ ЗАЯВКУ</h2>
            <form className="space-y-5 text-sm">
              <div>
                <label className="block uppercase mb-1 font-bold">ВАШЕ ИМЯ</label>
                <input type="text" placeholder='NAME' className="w-full border-b-2 text-black border-black px-3 py-2 mb-[32px] rounded-sm" />
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">EMAIL</label>
                <input type="email" placeholder='EMAIL' className="w-full mb-[32px] border-b-2 border-black text-black px-3 py-2 rounded-sm" />
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">НОМЕР ТЕЛЕФОНА</label>
                <input type="tel" placeholder="+998 (99) 999-99-99" className="w-full mb-[32px] text-black border-b-2 border-black px-3 py-2 rounded-sm" />
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">ГОРОД</label>
                <input type="text" placeholder='ГОРОД' className="w-full border-b-2 border-black mb-[32px] text-black px-3 py-2 rounded-sm" />
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">Хотите открыть:</label>
                <div className="flex flex-col mb-[32px] space-y-1 mt-1">
                  <label><input type="radio" name="startTime" className="mr-2" /> Фитнес студия</label>
                  <label><input type="radio" name="startTime" className="mr-2" /> Фитнес клуб</label>
                  <label><input type="radio" name="startTime" className="mr-2" />Домашний спортзал</label>
                  <label><input type="radio" name="startTime" className="mr-2" />Тренажерный зал в отеле, санатории</label>
                </div>
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">ПЛАНИРУЕМЫЕ СРОКИ ЗАПУСКА ПРОЕКТА:</label>
                <div className="flex flex-col mb-[32px] space-y-1 mt-1">
                  <label><input type="radio" name="startTime" className="mr-2" /> Фитнес студия</label>
                  <label><input type="radio" name="startTime" className="mr-2" /> Фитнес клуб</label>
                  <label><input type="radio" name="startTime" className="mr-2" />Домашний спортзал</label>
                  <label><input type="radio" name="startTime" className="mr-2" />Тренажерный зал в отеле, санатории</label>
                </div>
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</label>
                <div className="flex flex-col mb-[32px] space-y-1 mt-1">
                  <label><input type="checkbox" className="mr-2" /> Консультация</label>
                  <label><input type="checkbox" className="mr-2" /> Подбор оборудования</label>
                  <label><input type="checkbox" className="mr-2" /> Расстановка тренажеров на плане</label>
                  <label><input type="checkbox" className="mr-2" /> Лизинг</label>
                </div>
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>
                <label className="inline-block mt-[14px] mb-[30px] bg-[#00AEEF] text-white text-xs font-semibold py-2 px-4  ">
                  ADD FILES
                </label>
              </div>

              <div>
                <label className="block uppercase mb-1 font-bold">КОММЕНТАРИЙ</label>
                <textarea className="w-full border-b-2 border-black px-3 py-2 " rows="3" />
              </div>

              <button
                type="submit"
                className="block mt-[30px] w-[167px] h-[40px] mx-auto bg-[#00AEEF] text-white font-bold text-sm py-2">
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
        </div>
        <Footer2/>
    </div>
    
  )
}

export default Club
