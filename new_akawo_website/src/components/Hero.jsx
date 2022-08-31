import React from 'react'
import image from '../assets/imgs/image'
import { ButtonSecondary } from './index'
import axios from 'axios'
import fileDownload from 'js-file-download'

const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
}
  

const Hero = () => {
    return (
        <>
            <div className='bg-banner lg:-skew-y-8 flex pb-10 lg:pb-0 -mt-32 lg:h-694 relative'>
                <div className='ak-container grid pt-2 self-center md:flex lg:skew-y-8 relative z-10'>
                    <div className='w-full md:w-3/5 lg:w-45 mt-52 text-center md:text-left z-50' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true">
                        <h1 className='font-Montserrat text-3xl md:text-50 font-bold text-black leading-none'>The <span className='md:text-primary'> easiest way </span> to save your money</h1>
                        <p className='mt-4 text-lg'>
                            From the small stuff to the big picture, save and manage your business, get unlimited service to promote and help scale your business type.
                        </p>
                        <div className='mt-8'>
                            <div className='flex'>
                                <ButtonSecondary>
                                    <a href='https://play.google.com/store/apps/details?id=com.techfaithful.akawo'>
                                        <div className='flex'>
                                            <svg width="25" height="26" className='inline' viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.43531 0.537932C1.10739 0.930004 0.941819 1.43263 0.972507 1.94283V24.0589C0.941729 24.5691 1.10731 25.0718 1.43531 25.4638L1.50931 25.5359L13.8983 13.147V12.8547L1.50931 0.465332L1.43531 0.537932Z" fill="url(#paint0_linear_1908_286)" />
                                                <path d="M18.0277 17.2787L13.8983 13.1473V12.855L18.0287 8.72461L18.1218 8.77771L23.0146 11.5578C24.4122 12.3518 24.4122 13.651 23.0146 14.4455L18.1218 17.2256L18.0277 17.2787Z" fill="url(#paint1_linear_1908_286)" />
                                                <path d="M18.1218 17.2249L13.8983 13.001L1.4353 25.4639C1.72007 25.715 2.08373 25.8587 2.46326 25.8699C2.8428 25.8811 3.2143 25.7592 3.5134 25.5253L18.1218 17.2249Z" fill="url(#paint2_linear_1908_286)" />
                                                <path d="M18.1218 8.77706L3.5134 0.476657C3.2143 0.242751 2.8428 0.120844 2.46326 0.132058C2.08373 0.143272 1.72007 0.286899 1.4353 0.538057L13.8983 13.0011L18.1218 8.77706Z" fill="url(#paint3_linear_1908_286)" />
                                                <path opacity="0.2" d="M18.0287 17.1318L3.5134 25.3791C3.22582 25.5981 2.87482 25.7175 2.51339 25.7194C2.15196 25.7214 1.79971 25.6057 1.5098 25.3898L1.4353 25.4643L1.5093 25.5364L1.5098 25.5359C1.79966 25.7519 2.15193 25.8677 2.51339 25.8657C2.87485 25.8638 3.22587 25.7443 3.5134 25.5252L18.1218 17.2248L18.0287 17.1318Z" fill="black" />
                                                <path opacity="0.12" d="M1.43528 25.3185C1.1074 24.9264 0.941831 24.4238 0.972484 23.9136V24.0597C0.941813 24.5699 1.10738 25.0725 1.43528 25.4646L1.50978 25.3901L1.43528 25.3185Z" fill="black" />
                                                <path opacity="0.12" d="M23.0146 14.2988L18.0287 17.132L18.1218 17.225L23.0146 14.4449C23.3024 14.32 23.5515 14.1202 23.7358 13.8663C23.9202 13.6125 24.0331 13.3138 24.0629 13.0015C24.001 13.2843 23.8741 13.5488 23.6921 13.774C23.5101 13.9992 23.2781 14.1789 23.0146 14.2988Z" fill="black" />
                                                <path opacity="0.25" d="M3.51343 0.623343L23.0146 11.7033C23.2783 11.8232 23.5103 12.0029 23.6923 12.2282C23.8743 12.4535 24.0012 12.7182 24.0629 13.0011C24.0334 12.6887 23.9205 12.3899 23.7362 12.1359C23.5518 11.8819 23.3026 11.6821 23.0146 11.5572L3.51343 0.477243C2.11583 -0.316857 0.972534 0.342743 0.972534 1.94354V2.08964C0.972534 0.488943 2.11583 -0.170657 3.51343 0.623343Z" fill="white" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1908_286" x1="12.7996" y1="1.70964" x2="-3.98276" y2="18.4921" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#00A0FF" />
                                                        <stop offset="0.00657" stopColor="#00A1FF" />
                                                        <stop offset="0.2601" stopColor="#00BEFF" />
                                                        <stop offset="0.5122" stopColor="#00D2FF" />
                                                        <stop offset="0.7604" stopColor="#00DFFF" />
                                                        <stop offset="1" stopColor="#00E3FF" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1908_286" x1="24.8343" y1="13.0017" x2="0.637397" y2="13.0017" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#FFE000" />
                                                        <stop offset="0.4087" stopColor="#FFBD00" />
                                                        <stop offset="0.7754" stopColor="#FFA500" />
                                                        <stop offset="1" stopColor="#FF9C00" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_1908_286" x1="15.8269" y1="15.2961" x2="-6.93143" y2="38.0544" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#FF3A44" />
                                                        <stop offset="1" stopColor="#C31162" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_1908_286" x1="-1.70277" y1="-6.82376" x2="8.45975" y2="3.33876" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#32A071" />
                                                        <stop offset="0.0685" stopColor="#2DA771" />
                                                        <stop offset="0.4762" stopColor="#15CF74" />
                                                        <stop offset="0.8009" stopColor="#06E775" />
                                                        <stop offset="1" stopColor="#00F076" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <p className='flex flex-col leading-none text-left'><span className='text-10'>GET IT ON</span> <span className=' font-medium'>Google Play</span></p>
                                        </div>
                                    </a>
                                </ButtonSecondary>
                                {/* <ButtonSecondary>
                                    <div className='flex'>
                                        <svg width="25" height="26" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.6643 12.1968C15.675 11.3622 15.8967 10.5438 16.3087 9.81782C16.7208 9.09187 17.3097 8.48193 18.0208 8.04475C17.5691 7.39959 16.9731 6.86865 16.2803 6.4941C15.5875 6.11955 14.8169 5.9117 14.0297 5.88707C12.3504 5.71081 10.7225 6.8919 9.86676 6.8919C8.99449 6.8919 7.67699 5.90457 6.25826 5.93376C5.34058 5.96341 4.44624 6.23027 3.66236 6.70832C2.87848 7.18638 2.2318 7.85934 1.78534 8.66163C-0.148664 12.0101 1.29393 16.9311 3.14654 19.6377C4.07344 20.9631 5.15672 22.4435 6.57417 22.391C7.96123 22.3335 8.47927 21.5065 10.1536 21.5065C11.8123 21.5065 12.2984 22.391 13.7446 22.3576C15.2329 22.3335 16.1707 21.0264 17.0651 19.6885C17.7311 18.7441 18.2435 17.7004 18.5835 16.596C17.7188 16.2303 16.9809 15.6181 16.4617 14.8358C15.9426 14.0535 15.6653 13.1357 15.6643 12.1968Z" fill="white" />
                                            <path d="M12.9326 4.10683C13.7441 3.13262 14.1439 1.88044 14.0471 0.616211C12.8073 0.746431 11.662 1.33899 10.8395 2.27582C10.4374 2.73349 10.1294 3.26592 9.93315 3.84269C9.7369 4.41946 9.65626 5.02925 9.69582 5.63721C10.316 5.6436 10.9295 5.50918 11.4901 5.2441C12.0508 4.97901 12.544 4.59016 12.9326 4.10683Z" fill="white" />
                                        </svg>
                                        <p className='flex self-center leading-none text-left font-medium'>Coming Soon</p>
                                    </div>
                                </ButtonSecondary> */}

                                {/* <div className='mx-auto sm:mx-0'>
                                    <ButtonSecondary>
                                    {/* <button onClick={() => {console.log("hhhjh")}}>Download Image</button>
                                        <a href="https://akawo.me/akawo.apk" download="akawo.apk" className='flex'>
                                            <svg width="24" height="24" className='mr-2' viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5223 10.8519L33.5395 10.8692C33.9361 11.4382 34.2809 12.1107 34.5397 12.8694C34.7983 13.6109 35.0396 14.3869 35.212 15.1629C36.7123 21.25 37.954 26.2507 38.9367 30.1996C39.9025 34.1312 40.6785 37.304 41.2475 39.7355C41.7993 42.1496 42.196 43.9429 42.4201 45.0983C42.6442 46.2709 42.765 47.0642 42.765 47.5124C42.765 48.0471 42.6442 48.4092 42.3856 48.5816C42.1441 48.7713 41.7648 48.8748 41.2475 48.8748H38.3678C36.7641 48.8748 35.4708 48.6678 34.5223 48.2712C33.5567 47.8919 32.8324 47.3055 32.3151 46.5641C31.815 45.8053 31.4529 44.9086 31.2288 43.8395C31.0046 42.7705 30.815 41.5633 30.6598 40.201H23.1587L26.2626 32.0446H29.3664L28.4526 26.2853L33.0394 14.249C33.4532 13.1281 33.6084 11.9728 33.5223 10.8519Z" fill="white" />
                                                <path d="M29.7579 12.8686C31.2943 8.83408 29.2691 4.31806 25.2346 2.78173C21.2001 1.24541 16.6841 3.27056 15.1478 7.30503L2.7819 39.7786C1.24558 43.8131 3.27073 48.3291 7.30521 49.8655C11.3397 51.4017 15.8556 49.3765 17.392 45.3422L29.7579 12.8686Z" fill="#f4a85d" />
                                            </svg>

                                            <span className='self-center'>Download Now</span>
                                        </a>
                                    </ButtonSecondary>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='self-center w-44 mx-auto mt-8 md:mt-40 lg:mt-0 lg:w-253 lg:absolute lg:right-52 lg:top-20 md:z-10' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true"><img src={image.iphone13} alt="" /></div>
                </div>

                

                <div className='bg-primary h-16 w-420 -skew-x-6 absolute !z-0 -left-2 -bottom-5 hidden lg:block'></div>
                <div className='bg-skew_bg4 h-16 w-420 -skew-x-6 absolute !z-0 -left-44 -bottom-85 hidden lg:block'></div>
                <div className='bg-skew_bg h-16 w-420 -skew-x-6 absolute !z-0 right-85 bottom-10 hidden lg:block'></div>
                <div className='bg-skew_bg2 h-16 w-612 -skew-x-6 absolute !z-0 right-12 -bottom-6 hidden lg:block'></div>
                <div className='bg-skew_bg3 h-16 w-420 -skew-x-6 absolute !z-0 -right-44 -bottom-87 hidden lg:block'></div>
            </div>
        </>
    )
}

export default Hero