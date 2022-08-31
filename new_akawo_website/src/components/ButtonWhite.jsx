import React from 'react'

const ButtonWhite = ({children}) => {
  return (
    <button className='bg-white py-2 px-8 rounded-lg text-primary text-base appearance-none focus:outline-none'>{children}</button>
  )
}

export default ButtonWhite