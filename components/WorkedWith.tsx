import Image from 'next/image'
import React from 'react'

const WorkedWith = () => {

    const companies = ['https://juspay.in/customers/logo_snapdeal_lg.svg', 'https://juspay.in/customers/logo_mpl_lg.svg', 'https://juspay.in/customers/logo_tatacliq_lg.svg', 'https://juspay.in/customers/logo_grofers_lg.svg', 'https://juspay.in/customers/logo_phonepe_lg.svg', 'https://juspay.in/customers/logo_pharmeasy_lg.svg' ]
    
  return (
    <div className='mt-20 h-screen md:h-auto'>
        <div className=''>
                <div>
                    <h1 className='text-center text-[32px] text-black font-bold'>Trusted by Leading Companies</h1>
                </div>
                <div className='p-10 lg:p-20'>
                    <div className='flex flex-wrap gap-y-5 lg:gap-y-0 items-center justify-evenly'>
                    {
                        companies.map(c=>(<Image key={c} src={c} width={200} height={100} alt='logo' className='object-cover'/>))
                    }
                    <div/>
                </div>
        </div>
    </div>
    </div>
  )
}

export default WorkedWith