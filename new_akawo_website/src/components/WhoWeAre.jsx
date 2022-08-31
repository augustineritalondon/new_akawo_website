import React from 'react'
import image from '../assets/imgs/image'

const WhoWeAre = () => {
    return (
        <>
            <div className='ak-container !mt-20 lg:!mt-48 md:flex justify-between' id='who_we_are'>
                <div className='self-center ml-10 md:ml-0' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
                    <img src={image.whoweare} alt="" />
                </div>
                <div className='self-center text-center md:text-left md:w-1/2 md:-mt-10' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
                    <h2>WHO WE ARE</h2>
                    <p className='text-lg mt-5'>
                        Akawo is a simple digitalized saving mobile application software serving the 
                        need of saving towards the growth of your business with our cutting edge technology.
                    </p>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre