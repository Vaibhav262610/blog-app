"use client"

import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
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
                <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-[180px]' />
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                    Get Started
                    <Image src={assets.arrow} alt='' />
                    </button>
            </div>
            <div className='text-center py-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            </div>
        </div>
    </> : <></>
    )
}

export default Page
