import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col justify-center items-center'>
       <h1 className='text-2xl font-semibold'>Create an Account</h1>
       <h2 className='text-sm mt-2 text-gray-400'>Enter your email below to create your account</h2>
       <form action="" typeof='submit' className='flex flex-col'>
        <input type="email" placeholder='name@example.com' className='border w-[320px] font-light py-1  px-3 outline-none  text-gray-600 border-gray-700 mt-7' />
        <button className='border border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[0px_0px_0px_#000000] duration-100 px-5 py-1 mt-4 '>Sign In with Email</button>
       <div className='flex justify-center items-center'>
        <hr className='w-24 text-black mt-4 fill-black' />
       <h2 className='text-xs mt-4 uppercase'>or continue with</h2>
        <hr className='w-24 text-black mt-4 fill-black' />
       </div>
        <button className='border border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[0px_0px_0px_#000000] duration-100 px-5 py-1 mt-4 '>Sign In with Email</button>
       </form>
       </div>
    </div>
  )
}

export default page
