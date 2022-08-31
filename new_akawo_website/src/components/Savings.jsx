import React from 'react'
import image from '../assets/imgs/image'
import {ButtonWhite} from './index'
import { Link } from 'react-router-dom'

const Savings = () => {
  return (
    <div className='bg-primary pt-10 lg:pt-0'>
      <div className='ak-container2 lg:flex justify-between'>
        <div className='self-center lg:w-1/2' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
          <h1 className='text-white text-3xl md:text-50 leading-tight font-Montserrat capitalize'>Manage All Savings From Your Mobile device</h1>
          <p className='text-white text-sm md:text-lg mt-5 mb-10'>All savings are managed from one device, save daily, bulky and withdraw with ease, all in one device.</p>
          <Link to='/partners' className='lg:hidden'><ButtonWhite>Become a Partner</ButtonWhite></Link>
          <div className='hidden lg:block'>
            <ButtonWhite>Get the App</ButtonWhite>
          </div>
        </div>
        <div className='self-center mt-5 lg:mt-0'>
          <img src={image.manage} alt="" className='hidden lg:block' />
          <img src={image.manage2} alt=""  className='lg:hidden mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Savings