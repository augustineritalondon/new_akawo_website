import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Overlay, Input, SuccessModal } from './index'
import { HIDEMODAL } from '../state/allActions'
import { AKAgentForm, afterSometime } from '../helper'
import emailjs from '@emailjs/browser'

const Modal = () => {

    const form = useRef();

    const isModalVisible = useSelector((state) => state.app.isModalVisible)
    const dispatch = useDispatch()

    const formik = AKAgentForm()

    const handleKeyUp = (e) => {
        if (e.keyCode === 27) {
            dispatch(HIDEMODAL())
        }
    }
    const handleOutSideClick = () => {
        dispatch(HIDEMODAL())
    }
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false)
        return () => {
            window.removeEventListener('keyup', handleKeyUp, false)
        }
    }, [])

    const submitForm = (e) => {
        e.preventDefault();
        formik.handleSubmit(e);

        emailjs.sendForm('service_epw9a5i', 'template_i452tgo', form.current, 'user_QtrqioYRwPWtns39LyJkJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return isModalVisible.status ?
        ( 
            <>
                <Overlay handleOutSideClick={handleOutSideClick}>
                    <div className='h-screen w-sreen flex'>
                        <div className='w-full m-auto' onKeyUp={handleKeyUp} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='bg-white py-8 px-10 md:py-16 md:px-28 w-4/5 lg:w-1/2 mx-auto rounded-lg' onClick={e => e.stopPropagation()}>
                                <div className='w-full flex'>
                                    <h4 className='font-semibold text-22 text-primary md:w-3/4 md:ml-auto'>Become an Agent</h4>
                                </div>
                                <form action="" ref={form} onSubmit={submitForm}>
                                    <div className='md:flex md:justify-between ak-user-form mt-6'>
                                        <label className='self-center w-3/12'>Full Name</label>
                                        <div className='md:w-3/4'>
                                            <Input type="text" placeholder="********" name="fullName" takeFormik={formik} />
                                        </div>
                                    </div>
                                    <div className='md:flex md:justify-between ak-user-form mt-6'>
                                        <label className='self-center w-3/12'>Email Address</label>
                                        <div className='md:w-3/4'>
                                            <Input type="email" placeholder="e@gmail.com" name="email" takeFormik={formik} />
                                        </div>
                                    </div>
                                    <div className='md:flex md:justify-between ak-user-form mt-6'>
                                        <label className='self-center w-3/12'>Address</label>
                                        <div className='md:w-3/4'>
                                            <Input type="text" placeholder="12 somewhere" name="address" takeFormik={formik} />
                                        </div>
                                    </div>
                                    <div className='md:flex md:justify-between ak-user-form mt-6'>
                                        <label className='self-center w-3/12'>Phone Number</label>
                                        <div className='md:w-3/4'>
                                            <Input type="text" placeholder="003300332" name="phone" takeFormik={formik} />
                                        </div>
                                    </div>

                                    <div className='w-full flex'>
                                        <button className='bg-primary py-2 mt-10 w-full md:w-3/4 md:ml-auto font-semibold rounded-lg text-white text-xl appearance-none focus:outline-none'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Overlay>
            </>
        ) :
        null
}

export default Modal