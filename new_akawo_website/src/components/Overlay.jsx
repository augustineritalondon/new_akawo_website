import React, { useState } from 'react'

const Overlay = ({handleOutSideClick, children}) => {

    const [showLoader, setShowLoader] = useState(false)

    return (
        <>
            <div className='fixed w-screen h-screen top-0 z-10 ' style={{backgroundColor:'#00000096'}} onClick={handleOutSideClick}>
                {children}
            </div>
        </>
    )
}

export default Overlay