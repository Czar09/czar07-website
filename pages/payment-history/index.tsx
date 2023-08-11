import Sidebar from '@/components/Sidebar'
import React from 'react'

const PaymentHistory = () => {
  return (
    <div className='p-5 lg:p-10'>
    <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-[20vw] '>
            <Sidebar/>
        </div>
        <div className=' w-full  lg:px-10 pt-6 md:pt-0'>
          <h2 className='text-2xl font-bold'>Welcome Back, Tanuj Bhatt🖐️ </h2>
          <h6 className='py-1'>Your All Transactions Details...!</h6>
            <div className='lg:p-10 grid lg:grid-cols-2 grid-cols-1 gap-3'>
                <div className='flex justify-between items-center bg-neutral-100 px-4 md:px-10 py-4 rounded-2xl'>
                    <div className=''>
                        <div className='flex gap-2 md:gap-6 '>
                            <img src="https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180" className='w-20 h-20 rounded-full object-center' alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl'>Tanuj Bhatt</span>
                                <span className='text-xs md:text-sm'>Bought ML Course- II</span>
                                <span className='text-xs md:text-sm'>August 11, 2023 at 1:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-red-600'>- ₹999</span>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-neutral-100 px-4 md:px-10 py-4 rounded-2xl'>
                    <div className=''>
                        <div className='flex gap-2 md:gap-6 '>
                            <img src="https://tse4.mm.bing.net/th?id=OIP.4nxEKkPEv_-B48N6X4gFAAAAAA&pid=Api&P=0&h=180" className='w-20 h-20 rounded-full object-center' alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl'>CZAR</span>
                                <span className='text-xs md:text-sm'>Refund Process Completed</span>
                                <span className='text-xs md:text-sm'>August 11, 2023 at 1:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-green-600'>+ ₹599</span>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-neutral-100 px-4 md:px-10 py-4 rounded-2xl'>
                    <div className=''>
                        <div className='flex gap-2 md:gap-6 '>
                            <img src="https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180" className='w-20 h-20 rounded-full object-center' alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl'>Tanuj Bhatt</span>
                                <span className='text-xs md:text-sm'>Bought ML Course</span>
                                <span className='text-xs md:text-sm'>August 11, 2023 at 1:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-red-600'>- ₹599</span>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default PaymentHistory