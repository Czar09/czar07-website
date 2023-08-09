import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
const Courses = () => {

    const tutorials = [
        {
          "id": "1",
            "img": "https://cdn.pixabay.com/photo/2022/01/01/15/46/brain-6907898_640.png",
            "title": "Machine Learning A-Z™",
            "price": "420",
            "price_before": "780",
            "ratings": "4",
            "disp":"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included"
        },
        {
          "id": "2",
            "img": "https://tse4.mm.bing.net/th?id=OIP.Z32GW2qamvFULwSypmuOjAHaEK&pid=Api&P=0&h=180",
            "title": "100 Days of Code™",
            "price": "599",
            "price_before": "1299",
            "ratings": "4",
            "disp":"Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
        },
        {
          "id": "3",
            "img": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
            "title": "Meta Front-End Developer™",
            "price": "799",
            "price_before": "1599",
            "ratings": "4",
            "disp":"Launch your career as a front-end developer. Build job-ready skills for an in-demand career. No degree or prior experience required to get started."
        },
        {
          "id": "4",
            "img": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/18/2aa16c328a457cb910aa933bf2cd87/Professional-Certificate-Cloud-App.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
            "title": "IBM Full Stack Software Developer",
            "price": "499",
            "price_before": "899",
            "ratings": "4",
            "disp":"Prepare for a career as a full stack developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months."
        },
    ]

    const [showModel, setShowModel] = useState(false)

    const buyingCourse = () =>{
        setShowModel(!showModel)
    }

    interface course {
      price: number,
      price_before: number
    }

  return (
    <div>
       

        <section className={`text-gray-600 body-font bg-white transition-all duration-500 ${showModel ? "blur-md brightness-90": "blur-0"}`}>
  <div className="container px-5 py-10 mx-auto">
            <h1 className='text-center text-[32px] text-black font-bold py-10 '>Courses</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -m-4">
      {
        tutorials.map(course=>(
            <div className="p-4 ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course.img} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TECH</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
            <p className="leading-relaxed mb-3">{course.disp}.</p>
            <div className="flex items-center flex-wrap ">
                <h6 className=''>₹{course.price} /
                <small className='px-1 text-green-600 font-medium'>
                    Saving {
                        Math.floor(Number(course.price) / Number(course.price_before)*100) 
                    }%
                    </small></h6>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          <div className='w-full py-4'>
          <Link href={"/courses/"+ course.id} className='border w-full my-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-black rounded-full text-white'>Explore Course</Link>
          </div>
          </div>
        </div>
      </div>
        ))
      }
      </div>
      </div>
     
</section>
    </div>
  )
}

export default Courses