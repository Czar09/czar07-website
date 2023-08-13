'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiTwotoneStar } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { MdUpdate } from 'react-icons/md'
import { BiTimeFive, BiTrip } from 'react-icons/bi'
import { BsStarHalf, BsFillPersonFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Index = () => {
  
  const [showModel, setShowModel] = useState(false)
  
  const buyingCourse = () =>{
    setShowModel(!showModel)
  }
  const router = useRouter()


  const expertise=[
    {
        "img": "https://geekyglam.in/images/e1.jpg",
        "title": "Web Development"
    },
    {
        "img": "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?size=626&ext=jpg&ga=GA1.2.1739072392.1687083813&semt=ais",
        "title": "Blockchain"
    },
    {
        "img": "https://geekyglam.in/images/e2.jpg",
        "title": "SEO"
    }
]


    return (
    <div className='bg-white'>
         {/* on mobile devices */}
         <button className=' bg-indigo-600 text-white py-3 w-full bottom-0 z-50 fixed lg:hidden'>
                    Book an Appointment
                    </button>
        {
   showModel ? <div className={`top-[30%] md:top-[30%] lg:right-[40%] text-white md:right-[30%] sm:right-[18%] right-[5%]  z-10 ${showModel ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  '>
  <div className='flex items-center justify-center bg-gradient-to-r from-gray-700 to-black p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-96 w-64'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-sm font-bold'>Payment Confirmation</h2>
            <button className='font-semibold text-md ' onClick={buyingCourse}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-2 w-full  text-sm text-slate-200 mt-10'>
            <div className='flex items-center justify-between gap-x-3'>
                <input type="text" placeholder='COUPON CODE' className='px-3 w-full py-1 text-[8px] rounded-full outline-none text-black' />
                <button className='text-[8px] w-full border bg-white text-black rounded-full py-1'>Apply Coupon</button>
            </div>
            <div className='flex flex-col  py-2 px-4 bg-indigo-600 mt-3 rounded-full   w-full'>
              <Link className='text-[13px] text-center' href="#">Make Payment</Link>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}

        <div  className={`text-gray-600 body-font bg-white transition-all duration-500 ${showModel ? "blur-md brightness-90": "blur-0"}`}>
            {
                expertise.map(course=>(
                    course.title == router.query.slug ? 
                    <>
                <div className="md:pb-10 bg-gradient-to-br from-neutral-100 to-white-100">
                 <div className=" py-1  w-full bg-indigo-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">Avail our Special Offer and make the best deal for you ! </h3>
                      </div>
                  <section className="flex flex-col md:relative  text-white  bg-[url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=4000)] bg-no-repeat bg-cover bg-center lg:h-[45vh] md:px-6 md:py-10 py-3 ">
                    <div className="xl:container">
                      <div className="px-3 md:px-0">
                        <h1 className="text-3xl font-semibold">{course.title}</h1>
                        <div className="md:w-[50%] leading-5">
                        <small className="text-[14px]  text-justify leading-7">
                          Embark on a divine adventure with <b className="text-lg">{course.title}</b>, the
                          journey of a lifetime  that will lift your
                          spirit and lift your heart!
                        </small>
                        </div>
                        <div className="w-[50%] mt-1">
                          <hr />
                        </div>
                        <h6 className="flex items-center  mt-2 gap-2 text-yellow-500">
                          <small className="text-lg">4.5</small>{" "}
                          <small className="flex items-center text-lg">
                            <AiTwotoneStar /> <AiTwotoneStar />{" "}
                            <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf />
                          </small>{" "}
                          <small className="text-sm text-violet-400">
                            (13k ratings)
                          </small>
                        </h6>

                        <div className="flex items-center gap-1 mt-2">
                          <div>
                            <h6 className="text-2xl">
                              <MdUpdate />
                            </h6>
                          </div>
                          <div>
                            <h6>Last Updated 3/2023</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-3 md:mx-0 hidden lg:inline overflow-hidden text-black md:absolute border shadow-md hover:shadow-lg rounded-xl md:top-12 md:w-[25%] md:right-24 lg:right-52  top-0 right-0 bg-white mt-6 md:mt-0">
                      <Image width={200} height={100}  className="overflow-hidden h-44 w-full object-cover" src={course.img} alt="" />
                      <div className="py-2 px-3">
                        <h2 className="text-lg font-semibold ">
                          Book {course.title}
                        </h2>
                        <h2 className="text-md hidden lg:inline  ">
                          Looking for {course.title} services ? You are at right place.
                        </h2>
                        <div className="flex flex-col justify-between mt-4 mb-4">
                        <Link href="#" onClick={buyingCourse} className='border w-full my-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-black rounded-full text-white text-center'>Make an Appointment  </Link>
                        </div>
                      </div>
                    </div>
                   
                  </section>
                  
                  <section className='p-4 md:p-8 lg:p-20 lg:mt-20'>
                  <h2 className='font-semibold text-2xl py-4'>What you&apos;ll learn</h2>
<div className='grid grid-cols-1 md:grid-cols-2'>
<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    You will learn how to leverage the power of Python to solve tasks.
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    You will build games and programs that use Python libraries.
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    You will be able to use Python for your own work problems or personal projects.
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    You will create a portfolio of Python based projects you can share.
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Learn to use Python professionally, learning both Python 2 and Python 3!
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Create games with Python, like Tic Tac Toe and Blackjack!
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Learn advanced Python features, like the collections module and how to work with timestamps!
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Learn to use Object Oriented Programming with classes!
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Understand complex topics, like decorators.
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Understand how to use both the Jupyter Notebook and create .py files
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Get an understanding of how to create GUIs in the Jupyter Notebook system!
    </p>
  </div>

<div className='flex items-center gap-2'>
  <span className='text-indigo-600'>✔</span>
  <p className='text-slate-900 text-md'>
    Build a complete understanding of Python from the ground up!
    </p>
  </div>
</div>


<div className='p-5 my-20 text-black border'>
<h3 className='font-bold'>
  Top companies offer this course to their employees
  </h3>
This course was selected for our collection of top-rated courses trusted by businesses worldwide. Learn more
<div className='flex items-center justify-evenly pt-4'>
  <div>
    <Image width={100} height={100}  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="" />
  </div>
  <div>
    <Image width={100} height={100}  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" />
  </div>
  <div>
    <Image width={100} height={100}  src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" />
  </div>
  <div>
    <Image width={100} height={100}  src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="" />
  </div>
  <div>
    <Image width={100} height={100}  src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" />
  </div>
  </div>
</div>
                  </section>
                </div>              
            </>: null
        ))}
      </div>
    </div>
  )
}

export default Index