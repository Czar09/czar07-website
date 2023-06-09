import Image from 'next/image'
import React from 'react'

type Props = {}

function DetailCard({ }: Props) {
  return (
    <article className='flex flex-col items-center space-y-7 rounded-2xl flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-purple-400 p-10 opacity-100
    cursor-pointer transition-opacity duration-200'>
      <img
        className='w-32 h-32 rounded-full md:w-[200px] md:h-[200px]'
        src='/czarlogo (2).png' />

      <div className='px-0 md:px-10'>
        <h4 className='md:text-4xl text-xl font-bold'>Course Name</h4>
        <div className='justify-center items-center text-center mt-10'>
          <button className="rounded-lg h-30 opacity-90 text-2xl bg-black p-6 font-semibold text-white transition hover:opacity-100">
            Explore Course
          </button>
        </div>
      </div>

    </article>
  )
}

export default DetailCard