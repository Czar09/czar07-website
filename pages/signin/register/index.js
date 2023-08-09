import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'



const Signin = () => {
  return (
<>
<div className=" h-screen w-screen bg-[url(https://images.clickfunnels.com/3b/091f96e56447aa94781f17f7dc039b/Background-Header.png)] bg-no-repeat bg-cover">
<div className="flex md:h-full pt-24 md:pt-0  items-center  justify-center">
  <div className="md:px-20 px-14 py-6 shadow-xl bg-[#251E3E] md:w-[50vw] lg:w-[30vw] sm:scale-110 " style={{ borderRadius: 10 }}>
    <div className="text-center py-4">
        <h1 className='text-center text-[32px]  font-bold text-white'>Register</h1>
    </div>
    <form action="post" className='mt-4 w-full' >
            <div className='flex justify-center flex-col w-full'>
                <div>
                <input className='  border-b border-slate-300 px-4 py-2 mt-4 hover:border-indigo-500 w-full outline-none bg-inherit text-white' type="email" autoComplete='off' name='email'  placeholder='E-mail' />
                </div>
                <div>
                <input className=' border-b border-slate-300 px-4 py-2 mt-4 hover:border-indigo-500 w-full outline-none bg-inherit text-white' type="password" autoComplete='off' name='password'  placeholder='Username' />
                </div>
                <div>
                <input className=' border-b border-slate-300 px-4 py-2 mt-4 hover:border-indigo-500 w-full outline-none bg-inherit text-white' type="password" autoComplete='off' name='password'  placeholder='Contact Number' />
                </div>
                <div>
                <input className=' border-b border-slate-300 px-4 py-2 mt-4 hover:border-indigo-500 w-full outline-none bg-inherit text-white' type="password" autoComplete='off' name='password'  placeholder='Password' />
                </div>
                <button className='border mt-8 bg-indigo-600 text-white py-2 rounded-full border-slate-800 font-medium'> Create Account </button>
            </div>
               <div className='text-center'>
               <Link href="/signin" className='text-blue-700 text-sm mt-2'>Already have account? </Link>
               </div>
        </form>
  </div>
</div>
</div>
      <div className='relative '>
          <div className='absolute mix-blend-multiply filter blur-lg opacity-80 animate-pulse bg-color1 top-0  left-5 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color2 top-0 left-28 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color3 top-12 bottom-8 left-20 rounded-full w-60 h-40'></div>
        </div>
        </>
  )
}

export default Signin



