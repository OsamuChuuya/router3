import React from 'react';
import Footer2 from './Footer2';
import Swiper from './Swiper';
import koi from '../assets/blue.png';

const Contact = () => {
  return (
    <div className="w-[1440px] mx-auto font-sans bg-white">


   
      <section className="bg-[#00AEEF] h-[183px] text-center text-white py-5 mt-[5px]">
        <p className='font-bold text-[#FFF500] text-[18px]'>КОНТАКТЫ</p>
        <h2 className="uppercase text-[40px] font-bold">ШОУ РУМ TRUE В ТАШКЕНТЕ</h2>
        <p className="uppercase text-[27px] font-bold mt-1">Посетите наш выставочный зал в Ташкент Сити, Boulevard</p>
      </section>
      <section className="py-[40px] bg-white text-center">
        <div className="  mx-auto">
          <Swiper/>
          


        </div>

        
  
      </section>

      
      <section className="flex   ">
        <img src={koi} alt="" />

        <div className=" bg-[#D9D9D9] pl-[115px] w-[741px] flex flex-col justify-center">
          <h3 className="uppercase text-[28px] font-bold text-[#00AEEF] mb-[48px]">ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР В УЗБЕКИСТАНЕ - PROWELLNESS</h3>
          <p className="mb-1 text-[25px] text-black">+998 (90) 606-66-66</p>
          <p className="mb-1 text-[#00AEEF] text-[25px]">info@prowellness.uz</p>
          <p className="mb-[48px] text-black text-[25px]">Адрес: Ташкент Сити, Бульвар, <br /> ул. Фурката 2А</p>
          <p className="mt-4 text-[#00AEEF] font-bold text-[25px]">ПН-СБ с 9:00–19:00</p>
          <p className= "text-[#00AEEF] font-bold text-[25px]">ВС не рабочий</p>
        </div>
      </section>

      <Footer2/>
    </div>
  );
};

export default Contact;
