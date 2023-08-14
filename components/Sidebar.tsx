import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='relative w-full lg:h-screen lg:border-r bg-slate-100 rounded-full lg:rounded-none lg:bg-transparent'>
        <div className='lg:absolute'>
        <div className='flex flex-row lg:flex-col md:justify-start md:px-6 py-2 gap-y-2 md:gap-y-5'>
            <div className='py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl hover:bg-neutral-200'>
                <Link href="/my-learnings">My Learnings</Link>
            </div>
            <div className='py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl hover:bg-neutral-200'>
                <Link href="/payment-history">Payment History</Link>
            </div>
            <div className='py-2 md:px-4 px-2 rounded-full hover:scale-110 duration-300 transition-all text-md md:text-xl hover:bg-neutral-200'>
                <Link href="#">Log out</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar