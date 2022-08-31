import React from 'react'

const Features = () => {
  return (
    <div className='mt-20 lg:mt-52 text-center' id='features'>
      <div className='ak-container'>
        <h1 className='text-primary text-3xl font-semibold font-Montserrat'>Tailor-made Features</h1>
        <p className=' md:w-3/4 lg:w-1/2 mx-auto mt-3 text-lg'>
          Akawo is designed to fit into your business wallet, making it suitable for flexible saving plans with our amazing features to satisfy your business type.
        </p>

        <div className='md:flex justify-between mt-16'>
          <div className='mt-10 md:mt-0 md:w-2/6 lg:w-1/4'>
            <svg width="32" height="32" className='mx-auto' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#373435" />
              <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#F4A85D" />
              <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#F4A85D" />
            </svg>
            <h3 className='text-neutral text-2xl font-semibold font-Montserrat mt-4 mb-2'>Digitalize Saving</h3>
            <p>Akawo is easy to use, making it better for savings, no physical card is required for daily recordings.</p>
          </div>

          <div className='mt-10 md:mt-0 md:w-2/6 lg:w-1/4'>
            <svg width="32" height="32" className='mx-auto' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33325 1.3335H30.6666L26.6666 9.3335H1.33325L5.33325 1.3335Z" fill="#F4A85D" />
              <path d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z" fill="#F4A85D" />
              <path d="M5.33325 22.667H30.6666L26.6666 30.667H1.33325L5.33325 22.667Z" fill="#373435" />
            </svg>
            <h3 className='text-neutral text-2xl font-semibold font-Montserrat mt-4 mb-2'>Flexibility</h3>
            <p>Our saving system is designed to accommodate your business wallet, enabling you to have multi saving plan at the same time.</p>
          </div>

          <div className='mt-10 md:mt-0 md:w-2/6 lg:w-1/4'>
            <svg width="32" height="32" className='mx-auto' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.6666 8.00016V2.66683C30.6666 2.31321 30.5261 1.97407 30.2761 1.72402C30.026 1.47397 29.6869 1.3335 29.3333 1.3335H2.66659C2.31296 1.3335 1.97382 1.47397 1.72378 1.72402C1.47373 1.97407 1.33325 2.31321 1.33325 2.66683V8.00016H30.6666Z" fill="#F4A85D" />
              <path d="M1.33325 10.667V29.3337C1.33325 29.6873 1.47373 30.0264 1.72378 30.2765C1.97382 30.5265 2.31296 30.667 2.66659 30.667H9.33325V10.667H1.33325Z" fill="#373435" />
              <path d="M12 30.667H29.3333C29.687 30.667 30.0261 30.5265 30.2761 30.2765C30.5262 30.0264 30.6667 29.6873 30.6667 29.3337V10.667H12V30.667Z" fill="#F4A85D" />
            </svg>

            <h3 className='text-neutral text-2xl font-semibold font-Montserrat mt-4 mb-2'>User Friendly</h3>
            <p>Akawo is a straight foward application made for easy interpretation.</p>
          </div>
        </div>

        <div className='md:flex justify-evenly mt-16'>
          <div className='mt-10 md:mt-0 md:w-2/6 lg:w-1/4'>
            <svg width="32" height="32" className='mx-auto' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 31.9998H16C15.6463 31.9998 15.3072 31.8594 15.0571 31.6093C14.8071 31.3593 14.6666 31.0201 14.6666 30.6665V27.9998C14.6666 27.6462 14.8071 27.3071 15.0571 27.057C15.3072 26.807 15.6463 26.6665 16 26.6665H28C28.3536 26.6665 28.6927 26.807 28.9428 27.057C29.1928 27.3071 29.3333 27.6462 29.3333 27.9998V30.6665C29.3333 31.0201 29.1928 31.3593 28.9428 31.6093C28.6927 31.8594 28.3536 31.9998 28 31.9998Z" fill="#373435" />
              <path d="M28 0H3.99996C3.64634 0 3.3072 0.140475 3.05715 0.390523C2.8071 0.640572 2.66663 0.979711 2.66663 1.33333V4C2.66663 4.35362 2.8071 4.69276 3.05715 4.94281C3.3072 5.19286 3.64634 5.33333 3.99996 5.33333H28C28.3536 5.33333 28.6927 5.19286 28.9428 4.94281C29.1928 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1928 0.640572 28.9428 0.390523C28.6927 0.140475 28.3536 0 28 0Z" fill="#F4A85D" />
              <path d="M28 8H3.99996C3.64634 8 3.3072 8.14047 3.05715 8.39052C2.8071 8.64057 2.66663 8.97971 2.66663 9.33333V22.6667C2.66663 23.0203 2.8071 23.3594 3.05715 23.6095C3.3072 23.8595 3.64634 24 3.99996 24H28C28.3536 24 28.6927 23.8595 28.9428 23.6095C29.1928 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1928 8.64057 28.9428 8.39052C28.6927 8.14047 28.3536 8 28 8Z" fill="#F4A85D" />
            </svg>

            <h3 className='text-neutral text-2xl font-semibold font-Montserrat mt-4 mb-2'>Bulk Payment</h3>
            <p>
              Our system provides you with the room to save large differently from your basic saving plan and make more money as you save.
            </p>
          </div>

          <div className='mt-10 md:mt-0 md:w-2/6 lg:w-1/4'>
            <svg width="32" height="32" className='mx-auto' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 31.9998H16C15.6463 31.9998 15.3072 31.8594 15.0571 31.6093C14.8071 31.3593 14.6666 31.0201 14.6666 30.6665V27.9998C14.6666 27.6462 14.8071 27.3071 15.0571 27.057C15.3072 26.807 15.6463 26.6665 16 26.6665H28C28.3536 26.6665 28.6927 26.807 28.9428 27.057C29.1928 27.3071 29.3333 27.6462 29.3333 27.9998V30.6665C29.3333 31.0201 29.1928 31.3593 28.9428 31.6093C28.6927 31.8594 28.3536 31.9998 28 31.9998Z" fill="#373435" />
              <path d="M28 0H3.99996C3.64634 0 3.3072 0.140475 3.05715 0.390523C2.8071 0.640572 2.66663 0.979711 2.66663 1.33333V4C2.66663 4.35362 2.8071 4.69276 3.05715 4.94281C3.3072 5.19286 3.64634 5.33333 3.99996 5.33333H28C28.3536 5.33333 28.6927 5.19286 28.9428 4.94281C29.1928 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1928 0.640572 28.9428 0.390523C28.6927 0.140475 28.3536 0 28 0Z" fill="#F4A85D" />
              <path d="M28 8H3.99996C3.64634 8 3.3072 8.14047 3.05715 8.39052C2.8071 8.64057 2.66663 8.97971 2.66663 9.33333V22.6667C2.66663 23.0203 2.8071 23.3594 3.05715 23.6095C3.3072 23.8595 3.64634 24 3.99996 24H28C28.3536 24 28.6927 23.8595 28.9428 23.6095C29.1928 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1928 8.64057 28.9428 8.39052C28.6927 8.14047 28.3536 8 28 8Z" fill="#F4A85D" />
            </svg>

            <h3 className='text-neutral text-2xl font-semibold font-Montserrat mt-4 mb-2'>Simple Withdrawal Method</h3>
            <p>No application form for withdrawing, with just a call or SMS you can make all withdraws  ASAP.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features