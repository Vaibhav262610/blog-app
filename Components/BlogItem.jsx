import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = ({title,desc,image,category}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white hover:shadow-[-7px_7px_0px_#000000] duration-100 border border-black '>
        <Image src={image} width={400} alt='' className='cursor-pointer w-[400px] border-b-black' height={400} />
            <h1 className='ml-5 text-white mt-5 px-1 inline-block text-sm bg-black '>{category}</h1>
            <div className='p-5'>
            <h1 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h1>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{desc}</p>
            <div className='cursor-pointer inline-flex items-center py-2 text-center font-semibold'>
                Read More
                <Image src={assets.arrow} alt='' className='ml-2' width={15}/>
            </div>
        </div>
    </div>
  )
}

export default BlogItem
