import React from 'react'
import image from '../assets/imgs/image'

const GrowBigger = () => {
  return (
    <>
        <div className='bg-banner py-12 mt-20 lg:mt-36'>
            <div className='ak-container md:flex justify-between'>
                <div className='self-center ml-5 md:ml-0' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
                    <img src={image.grow} alt="" />
                </div>
                <div className='self-center text-center md:text-left md:w-1/2 mt-3 md:mt-3' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
                    <h2>Grow Bigger</h2>
                    <p className='text-lg mt-5'>
                        Plan your future savings and grow your Buisness by Organizing your savings plan to help you achieve your business goals.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default GrowBigger