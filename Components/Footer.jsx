import { assets } from '@/Assets/assets'
import { FaGithub } from "react-icons/fa";
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} width={120} alt='' />
      <p className='text-sm text-white'>Made and Designed by <span className='font-bold'>Vaibhav Rajpoot </span>💖</p>
    <div className='flex gap-4'>
        <FaGithub className='cursor-pointer fill-white text-3xl' />
        <RiInstagramFill className='cursor-pointer rounded-full p-1 text-3xl bg-white' />
        <FaLinkedin className='cursor-pointer rounded-full p-1 text-3xl bg-white' />
    </div>
    </div>
  )
}

export default Footer
