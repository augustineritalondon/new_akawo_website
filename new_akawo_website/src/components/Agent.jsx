import React from 'react'
import image from '../assets/imgs/image'
import { ButtonPrimary, Modal, SuccessModal } from './index'
import { useDispatch } from 'react-redux'
import { SHOWMODAL, HIDEMODAL } from '../state/allActions'
import {afterSometime} from '../helper'

const Agent = () => {

    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(SHOWMODAL())
        console.log('true')
    }    

    return (
        <>
            <Modal />
            <SuccessModal />
            <div className='bg-banner2 mt-24 pt-10 md:pt-0' id='agent'>
                <div className='ak-container2 md:flex justify-between'>
                    <div className='self-center text-center md:text-left md:w-4/5 lg:w-2/5' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-once="true">
                        <h2>Become an Agent</h2>
                        <p className='text-lg mt-5 mb-10'>Want to work with us? Become an agent with akawo.io Click the button below and get started.</p>
                        <ButtonPrimary onClick={handleModal}>Become an Agent</ButtonPrimary>
                    </div>
                    <div className='self-center -ml-8 md:ml-0' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-once="true">
                        <img src={image.agent} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Agent