import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} width={120} alt='' />
      <p className='text-sm text-white'>Made and Designed by <span className='font-bold'>Vaibhav Rajpoot </span>💖</p>
    </div>
  )
}

export default Footer
