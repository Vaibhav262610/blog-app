import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-[180px]' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black'>
                Get Started <Image src={assets.arrow} alt='' />
            </button>
        </div>
    </div>
  )
}

export default Header
