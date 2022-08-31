import React from 'react'

const ButtonSecondary = ({children}) => {
  return (
    <button className='bg-black py-2 px-3 mr-3 rounded text-white text-base appearance-none focus:outline-none'>
      {children}
    </button>
  )
}

export default ButtonSecondary