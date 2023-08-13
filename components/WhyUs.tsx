import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
const WhyUs = () => {

    const stats = [
        {
            "title": "Clients helped",
            "no": "100+"
        },
        {
            "title": "total courses sell",
            "no": "100+"
        },
        {
            "title": "offices",
            "no": "0"
        },
        {
            "title": "service offer",
            "no": "10+"
        }
    ]

    const [showModel, setShowModel] = useState(false)
  
    const handleClick = () =>{
      setShowModel(!showModel)
    }

  return (
    <div className={`${showModel ? 'lg:p-0 w-full h-full p-0' : 'lg:p-44'} z-50`} id= "about">
         {
   showModel ? <div className={`top-[30%] md:top-[20%]  text-white w-full h-full   lg:px-0  z-10 ${showModel ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  flex justify-center items-center  '>
  <div className='flex items-center justify-center h-full bg-gradient-to-r from-gray-700 to-black  p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[30%] md:w-[40%]  sm:w-[60%] w-[80%]'>
        <div className='w-full'>
          <div className='flex justify-between gap-10 lg:gap-20 items-center mb-4'>
            <div className="flex flex-col">
            <h2 className='text-sm font-bold'>Contact Us</h2>
            <small className="text-[8px] mt-1">Speak us by submitting this form, our team will contact you as soon as possible.</small>
            </div>
            <button className='font-semibold text-md ' onClick={handleClick}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-2 w-full  text-sm text-slate-200 mt-5'>
            <div className=''>
                <div className="flex flex-col w-full py-2">
              <label className="text-[10px]" htmlFor="">Name</label>
                <input type="text" placeholder='COUPON CODE' className='px-3 w-full py-1 text-[8px] bg-transparent border-b outline-none ' />
                </div>
                <div className="flex flex-col w-full py-2">
              <label className="text-[10px]" htmlFor="">E-mail ID</label>
                <input type="text" placeholder='COUPON CODE' className='px-3 w-full py-1 text-[8px] bg-transparent border-b outline-none ' />
                </div>
                <div className="flex flex-col w-full py-2">
              <label className="text-[10px]" htmlFor="">Contact Number</label>
                <input type="text" placeholder='COUPON CODE' className='px-3 w-full py-1 text-[8px] bg-transparent border-b outline-none ' />
                </div>
            </div>
            <div className='flex flex-col  py-2 px-4 bg-indigo-600 mt-3 rounded-full   w-full'>
              <Link className='text-[13px] text-center' href="#">Submit Details</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}
        <div className={`flex justify-center flex-col lg:flex-row ${showModel ? "blur-md brightness-50": "blur-0"}`}>
            <div className='lg:w-[60%] p-4'>
                <h2 className='uppercase text-xl tracking-widest text-center font-bold'>Total  revenue genrated</h2>
                <h2 className='text-[30px] sm:text-[60px] font-bold text-purple-600 text-center'>₹13,00,000</h2>
                <div className='grid grid-cols-2 gap-5 mt-3'>
                    {
                    stats.map(stat=>(
                        <div key={stat.title} className=' bg-gradient-to-r from-gray-700 to-black p-5 rounded-2xl'>
                            <h6 className='text-lg tracking-widest font-semibold uppercase text-white'>{stat.title}</h6>
                            <h2 className='text-4xl font-bold text-purple-400'>{stat.no}</h2>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className='lg:w-[40%] text-gray-500 p-3'>
                <h3 className='text-2xl font-bold text-black'>Our Philosophy</h3>
                <p className='text-lg mt-3'>Here at IAG Media, we&apos;ve worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the the inefficiencies & formalities that plague most agencies. </p>
                <p className='text-lg mt-5'>Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client. </p>
                <h6 className='font-bold mt-6 text-sm'>Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below. </h6>
                <button className="px-10  rounded-full py-4 bg-purple-600 text-white mt-4 font-bold" onClick={handleClick}>Speak To Our Team Today <br />
              </button>
            </div>
        </div>
    </div>
  )
}

export default WhyUs