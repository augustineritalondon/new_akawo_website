import React from 'react'
import { useSelector } from 'react-redux'
import { Overlay } from './index'

const SuccessModal = () => {

  const isSubmitSuccessful = useSelector((state) => state.app.isSubmitSuccessful)

  console.log('this is ', isSubmitSuccessful)

  return isSubmitSuccessful ? (
    <Overlay>
      <div className='h-screen w-sreen flex'>
        <div className=' w-full m-auto' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
          <div className='bg-white w-4/5 md:w-1/3 mx-auto px-3 md:px-8 py-6 text-center rounded-md'>
            <div className=''>
            <svg width="56" height="56" className='mx-auto' viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_481_486)">
                <circle cx="40.854" cy="34.5" r="32" fill="#03D17A" />
              </g>
              <path d="M59.854 25.2411L35.1683 48.5L23.854 37.8397L26.7632 35.0986L35.1683 43.0179L56.9448 22.5L59.854 25.2411Z" fill="white" />
              <defs>
                <filter id="filter0_d_481_486" x="0.854004" y="0.5" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_481_486" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_481_486" result="shape" />
                </filter>
              </defs>
            </svg>
              <h1 className=' text-2xl font-bold '>Successful</h1>
              <p>Your application has been submitted and you will be contacted shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  ) :
    null
}

export default SuccessModal