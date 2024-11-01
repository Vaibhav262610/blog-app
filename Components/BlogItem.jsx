import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = () => {
  return (
    <div className='border border-black w-fit '>
        <Image src={blog_data[0].image} width={400} alt='' className='w-[300px]' />
        <h1 className='bg-black text-white w-fit p-1 text-sm'>{blog_data[0].category}</h1>
        <h1 className='mt-6 leading-relaxed text-xl w-[300px]'>{blog_data[0].title}</h1>
        <p className='text-sm mt-3 text-gray-600 w-[300px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur libero dolor odio expedita sunt.</p>
        <button className='text-xl flex items-center justify-center gap-2'>
            <h1>Read More</h1>
            <Image src={assets.arrow} alt='' className=''/>
        </button>
    </div>
  )
}

export default BlogItem
