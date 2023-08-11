import React from 'react'

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

  return (
    <div className=' lg:p-44 z-50' id= "about">
        <div className='flex justify-center flex-col lg:flex-row'>
            <div className='lg:w-[60%] p-4'>
                <h2 className='uppercase text-xl tracking-widest text-center font-bold'>Total  revenue genrated</h2>
                <h2 className='text-[30px] sm:text-[60px] font-bold text-purple-600 text-center'>₹13,00,000</h2>
                <div className='grid grid-cols-2 gap-5 mt-3'>
                    {
                    stats.map(stat=>(
                        <div className=' bg-gradient-to-r from-gray-700 to-black p-5 rounded-2xl'>
                            <h6 className='text-lg tracking-widest font-semibold uppercase text-white'>{stat.title}</h6>
                            <h2 className='text-4xl font-bold text-purple-400'>{stat.no}</h2>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className='lg:w-[40%] text-gray-500 p-3'>
                <h3 className='text-2xl font-bold text-black'>Our Philosophy</h3>
                <p className='text-lg mt-3'>Here at IAG Media, we've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the the inefficiencies & formalities that plague most agencies. </p>
                <p className='text-lg mt-5'>Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client. </p>
                <h6 className='font-bold mt-6 text-sm'>Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below. </h6>
                <button className="px-10  rounded-full py-4 bg-purple-600 text-white mt-4 font-bold">Speak To Our Team Today <br />
              </button>
            </div>
        </div>
    </div>
  )
}

export default WhyUs