import React from 'react'
import image from '../assets/imgs/image'

const HowItWorks = () => {
    return (
        <>
            <div className='ak-container !mt-20 md:!mt-36' id='how_it_works'>
                <div className='text-center'>
                    <h2>How it Works</h2>
                    <p className='text-lg mt-4'>Akawo mobile application is a straight forward system with easy enrollment</p>
                </div>

                <div className='w-10/12 mx-auto mt-16 lg:mt-28 relative'>
                    <div className='md:flex justify-between '>
                        <div className=' md:w-2/5  lg:w-1/5 text-center md:text-right mt-10 md:mt-0'>
                            <div className='w-10 h-10 bg-primary text-white mx-auto md:mx-0 md:ml-auto flex justify-center rounded-lg'><p className='self-center text-lg'>1</p></div>
                            <h3 className='text-neutral text-xl font-semibold font-Montserrat mt-4 mb-2'>Sign Up</h3>
                            <p>sign up with your contact information.</p>
                        </div>
                        <div className='md:w-2/5  lg:w-1/5 text-center md:text-left mt-10 md:mt-0'>
                            <div className='w-10 h-10 bg-primary text-white mx-auto md:mx-0 flex justify-center rounded-lg'><p className='self-center text-lg'>2</p></div>
                            <h3 className='text-neutral text-xl font-semibold font-Montserrat mt-4 mb-2'>Organization Code</h3>
                            <p>Input a organization code given to you by your Akawo agent.</p>
                        </div>
                    </div>

                    <div className='md:flex justify-between md:mt-10 lg:mt-40'>
                        <div className='md:w-2/5 lg:w-1/5 text-center md:text-right mt-10 md:mt-0'>
                            <div className='w-10 h-10 bg-primary text-white mx-auto md:mx-0 md:ml-auto flex justify-center rounded-lg'><p className='self-center text-lg'>3</p></div>
                            <h3 className='text-neutral text-xl font-semibold font-Montserrat mt-4 mb-2'>Create Savings plan</h3>
                            <p>Create flexible daily, weekly or monthly savings plan.</p>
                        </div>
                        <div className='md:w-2/5 lg:w-1/5 text-center md:text-left mt-10 md:mt-0'>
                            <div className='w-10 h-10 bg-primary text-white mx-auto md:mx-0 flex justify-center rounded-lg'><p className='self-center text-lg'>4</p></div>
                            <h3 className='text-neutral text-xl font-semibold font-Montserrat mt-4 mb-2'>Start Saving</h3>
                            <p>Start saving using any of your flexible savings plan.</p>
                        </div>
                    </div>
                    <div className='absolute top-0 lg:left-200 lgx:left-290 xl:left-300 xxl:left-350 2xl:left-400 hidden lg:block'><img src={image.works} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks