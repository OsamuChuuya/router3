import React from 'react'
import reg from '../assets/Rectangle.png';
const Footer = () => {
  return (
    <div>
        <div 
            className=" h-[805px] bg-no-repeat bg-cover pt-[127px] bg-center"
            style={{ backgroundImage: `url(${reg})` }}>
              <div className='w-[505px] h-[552px] bg-white pl-[28px] mx-auto pt-[53px] '>
                <h3 className='font-bold text-2xl w-[370px] mb-[27px]  text-black'>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h3>
                <p className='text-black w-[400px]'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                <input type="text" className='w-[450px] h-[42px] text-black px-2  mt-[36px] bg-[#F0F0F0]' placeholder='NAME ' />
                <input type="text" className='w-[450px] h-[42px] text-black px-2  mt-[22px] bg-[#F0F0F0]' placeholder='EMAIL ' />
                <input type="text" className='w-[450px] h-[42px] text-black px-2  mt-[22px] bg-[#F0F0F0]' placeholder='+998 99-999-99-99 ' />
                <button className='w-[450px] h-[36px] bg-[#01AEE7] mt-[33px] '>ОТПРАВИТЬ</button>

              </div>
        </div>      
          <footer className="footer sm:footer-horizontal bg-[#01AEE7] text-neutral-content font-bold grid-rows-2 p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">GitHub</a>
  </nav>
  <nav>
    <h6 className="footer-title">Explore</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Apps</h6>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer