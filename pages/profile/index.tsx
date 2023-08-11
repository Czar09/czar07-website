import Sidebar from '@/components/Sidebar'
import React from 'react'

const profile = () => {
  return (
    <div className='p-10'>
        <div className='flex '>
            <div className='w-[20vw] '>
                <Sidebar/>
            </div>
            <div className=' w-full h-screen px-10'>
              <h2 className='text-2xl font-bold'>Welcome Back, Tanuj Bhatt🖐️ </h2>
              <div className=' flex gap-4 flex-col mt-10'>
                  <div>
                    <small className='text-md text-slate-700'>Name</small>
                    <h6>Tanuj Bhatt</h6>
                  </div>
                  <div>
                    <small className='text-md text-slate-700'>Username</small>
                    <h6>tanujdotcpp</h6>
                  </div>
                  <div>
                    <small className='text-md text-slate-700'>E-mail ID</small>
                    <h6>tanujbhatt644@gmail.com</h6>
                  </div>
                  <div>
                    <small className='text-md text-slate-700'>Contact Number</small>
                    <h6>+91-9876543212</h6>
                  </div>
                  <div className='mt-3'>
                    <button className='px-8 py-3  rounded-full bg-gradient-to-r from-gray-700 to-black text-white'>Edit Details</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default profile