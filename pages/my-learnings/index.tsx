import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import React from 'react'

const index = () => {

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

  return (
    <div className='p-5 lg:p-10'>
        <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[20vw] '>
                <Sidebar/>
            </div>
            <div className=' w-full  px-4 lg:px-10 pt-6 lg:pt-0'>
              <h2 className='text-2xl font-bold'>Welcome Back, Tanuj Bhatt🖐️ </h2>
              <h6 className='py-1'>Here are some courses you bought...!</h6>
                <div className='py-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-4">
      {
        tutorials.map(course=>(
            <div className="p-4 ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 h-20 w-full object-cover object-center" src={course.img} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TECH</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
          <div className='w-full py-4'>
          <Link href={"/courses/"+ course.id} className='border w-full my-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-black rounded-full text-white'>Learn</Link>
          </div>
          </div>
        </div>
      </div>
        ))
      }
      </div>
     
                </div>
            </div>
        </div>
    </div>
  )
}

export default index