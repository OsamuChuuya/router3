import React from 'react'
import vector from '../assets/Vector.png'

const Footer2 = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-[#01AEE7] text-bold text-base p-10">
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
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="E-MAIL"
          className="input input-bordered bg-white text-black join-item" />
        <button className="btn btn-primary bg-amber-300 join-item"><img src={vector} alt="" /></button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  )
}

export default Footer2