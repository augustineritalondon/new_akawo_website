import React from 'react'

const ButtonPrimary = ({children, onClick}) => {
  return (
    <button className='bg-primary py-2 px-4 md:px-8 rounded-lg text-white text-sm xl:text-base appearance-none focus:outline-none' onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonPrimary