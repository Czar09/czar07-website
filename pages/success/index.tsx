import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className='h-[70vh]'>
        <div className='flex justify-center items-center h-full'>
                <div className='flex gap-4  items-center'>
                    <Image width={10} height={10} src="/success.jpeg" className='h-10 w-10 object-cover'  alt="" />
                    <h1 className='text-xl'>
                    You have succesfully purchased this course, go to your <Link href="/profile" className='text-blue-600 underline'>dashboard</Link> to access your course 
                    </h1>
                </div>
        </div>
    </div>
  )
}

export default Success