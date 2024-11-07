import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
            {/* <div className='text-5xl border border-black p-2 font-semibold shadow-[-7px_7px_0px_#000000] flex'>
                <h1 className=''>B</h1>
                <h1 className=''>logger</h1>
            </div> */}
            {/* <h1 className='text-5xl p-4 text-white bg-black font-semibold'>B< span className='bg-white text-black'>logger</span></h1> */}
            <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-[180px]' />
            </Link>
            <Link href='/login'>
            <button className='hover:shadow-[0px_0px_0px_#000000] shadow-[-7px_7px_0px_#000000] transition-all duration-175 flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black'>
                Get Started <Image src={assets.arrow} alt='' />
            </button>
            </Link>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[780px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quam assumenda officiis, iure dolorum laudantium labore.</p>
            <form action="" className=' shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black'>
                <input type="email" className='w-[21rem] pl-4 outline-none' placeholder='Enter your email' />
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-700 active:text-white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header
