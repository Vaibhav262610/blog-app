"use client"

import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = ({ params: asyncParams }) => {
    const [data, setData] = useState(null)
    const params = React.use(asyncParams)

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i])
                console.log(blog_data[i])
                break
            }
        }
    }

    useEffect(() => {
        if (params.id) {
            fetchBlogData()
        }
    }, [params.id])
    return ( data ? <>
        <div className='bg-gray-200 md:px-12 lg:px-28 py-5 px-5'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-[180px]' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[0px_0px_0px_#000000] shadow-[-7px_7px_0px_#000000] transition-all duration-175'>
                    Get Started
                    <Image src={assets.arrow} alt='' />
                    </button>
            </div>
            <div className='text-center py-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image className='mx-auto  mt-6 border rounded-full border-white' src={data.author_img} alt='' width={60} height={60}/>
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={data.image} alt='' width={1280} height={720} />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction :</h1>
                <p>{data.description}</p>
            </div>
            <Footer />
    </> : <></>
    )
}

export default Page
