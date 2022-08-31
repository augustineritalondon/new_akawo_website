import React, { useRef } from 'react'
import { Navbar, Footer, ButtonPrimary, SuccessModal } from '../components/index'
import image from '../assets/imgs/image'
import { useForm } from 'react-hook-form'
import { services, template, public_key } from '../assets/index'
import emailjs from '@emailjs/browser'
import { SHOWSUCCESSMODAL, HIDESUCCESSMODAL, HIDEMODAL } from '../state/allActions'
import { useDispatch } from 'react-redux'
import { afterSometime } from '../helper'

const Partners = () => {

    const form = useRef();
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();

        emailjs.sendForm(services, template, form.current, public_key)
            .then((result) => {
                dispatch(SHOWSUCCESSMODAL())
                afterSometime(() => {
                    dispatch(HIDESUCCESSMODAL())
                }, 2000)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <>
            <Navbar phoneNumber='08164659672' />
            <SuccessModal />
            <div className='ak-container !mt-5 xl:!mt-10 bg-white lg:py-5 pb-10 2xl:pb-16'>
                <div className='relative py-5'>
                    <img src={image.PartnersImage} className="mx-auto" alt="" />
                    <div className='absolute top-1/3 w-full'>
                        <div className='text-center'>
                            <h1 className='text-white text-2xl md:text-3xl xl:text-6xl font-Montserrat'>Become a Partner</h1>
                            <p className='text-white text-sm md:text-base xl:text-lg'>Manage your organization with just few steps. Register below</p>
                        </div>
                    </div>
                </div>
                <div className='w-90 mx-auto'>
                    <form action="" onSubmit={handleSubmit(onSubmit)} ref={form}>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div>
                                <input type='text' placeholder='Full Name' name='fullName' onChange='' className={`ak-input`}
                                    id="fullName"
                                    aria-invalid={errors.fullName ? "true" : "false"}
                                    {...register('fullName', { required: true })}
                                />
                                {errors.fullName && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>

                            <div>
                                <input type='email' placeholder='Email Address' name='email' onChange='' className={`ak-input`}
                                    id="email"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {...register('email', { required: true })}
                                />
                                {errors.email && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <select name="gender" className={`ak-input2`}
                                    id="gender"
                                    aria-invalid={errors.gender ? "true" : "false"}
                                    {...register('gender', { required: true })}
                                >
                                    <option value="" selected disabled>-Select Gender-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <input type='text' placeholder='Phone Number' name='phoneNumber' onChange='' className={`ak-input`}
                                    id="phoneNumber"
                                    aria-invalid={errors.phoneNumber ? "true" : "false"}
                                    {...register('phoneNumber', { required: true })}
                                />
                                {errors.phoneNumber && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <input type='text' placeholder='Address' name='address' onChange='' className={`ak-input`}
                                    id="address"
                                    aria-invalid={errors.address ? "true" : "false"}
                                    {...register('address', { required: true })}
                                />
                                {errors.address && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <input type='text' placeholder='City' name='city' onChange='' className={`ak-input`}
                                    id="city"
                                    aria-invalid={errors.city ? "true" : "false"}
                                    {...register('city', { required: true })}
                                />
                                {errors.city && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <input type='text' placeholder='State' name='state' onChange='' className={`ak-input`}
                                    id="state"
                                    aria-invalid={errors.state ? "true" : "false"}
                                    {...register('state', { required: true })}
                                />
                                {errors.state && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <select name="subscriptionPlan" className={`ak-input2`}
                                    id="subscriptionPlan"
                                    aria-invalid={errors.subscriptionPlan ? "true" : "false"}
                                    {...register('subscriptionPlan', { required: true })}
                                >
                                    <option value="" selected disabled>Subscription Plan</option>
                                    <option value="Basic-Plan">Basic Plan</option>
                                    <option value="Solid-Plan">Solid Plan</option>
                                    <option value="Premium-Plan">Premium Plan</option>
                                    <option value="Free-Plan">Free Plan</option>
                                </select>
                                {errors.subscriptionPlan && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                            <div>
                                <select name="organizationType" className={`ak-input2`}
                                    id="organizationType"
                                    aria-invalid={errors.organizationType ? "true" : "false"}
                                    {...register('organizationType', { required: true })}
                                >
                                    <option value="" selected disabled>-Select Organization Type-</option>
                                    <option value="owned">Owned(1 Person Only)</option>
                                    <option value="corporate">Corporate(More than 1 Person)</option>
                                </select>
                                {errors.organizationType && (<span role="alert" className='text-red-400'>This field is required</span>)}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5 mt-10'>
                            <ButtonPrimary>Register</ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
            <Footer phoneNumber='08164659672' />
        </>
    )
}

export default Partners