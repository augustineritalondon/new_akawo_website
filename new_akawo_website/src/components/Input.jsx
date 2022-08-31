import React from 'react'

const Input = ({ type, placeholder, name, takeFormik }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} name={name} onChange={takeFormik.handleChange} className={`ak-input`} />
            {takeFormik.errors[name] ? <p className='error'>{takeFormik.errors[name]}</p> : null}
        </>
    )
}

export default Input