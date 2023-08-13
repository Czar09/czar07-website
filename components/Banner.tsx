'use client'
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
type Props = {};

function Banner({}: Props) {

  const [showModel, setShowModel] = useState(false)
  
  const handleClick = () =>{
    setShowModel(!showModel)
  }
  
  return (
    <>
    {
   showModel ? <div className={`top-[30%] md:top-[20%]  text-white w-full h-full  lg:px-0  z-10 ${showModel ? "fixed": "sticky"}`} >
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
      <div className={`h-screen relative z-1 bg-[url(https://images.clickfunnels.com/3b/091f96e56447aa94781f17f7dc039b/Background-Header.png)] bg-no-repeat bg-cover ${showModel ? "blur-sm brightness-90": "blur-0"}`}>
        <div className=" lg:p-20 px-4 pt-10  mx-auto ">
          <div className="flex  w-full ">
            <div className="lg:px-20 w-full lg:w-[55%]">
              <h2
                className="text-xl md:text-2xl  font-bold tracking-widest text-white uppercase  "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                World-Class The organization for everything
              </h2>
              <h6 className="text-purple-400 text-xl md:text-3xl pt-2 font-bold tracking-widest  ">
                Discover our digital education and service platform! Immerse
                yourself in our ocean of wisdom and acquire the expertise.
              </h6>
              <h6 className="text-lg md:text-xl pt-4  tracking-widest text-white ">
                Stop wasting time and money on faulty and ineffective ad
                campaigns.
              </h6>
              <h6 className="text-lg md:text-xl pt-7  tracking-widest text-white ">
              It s time to make your ad-budget count, scale your business and blow up your sales.
              </h6>
              <button onClick={handleClick} className="px-10 rounded-full py-4 bg-purple-600 text-white mt-4 font-bold">Speak To Our Team Today <br />
              </button>
            </div>
            <div className="px-20 w-[45%] hidden lg:inline-block">
              <Image height={600} width={384}
                className=" w-full"
                src="/hero.webp"
                alt="hero section image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
