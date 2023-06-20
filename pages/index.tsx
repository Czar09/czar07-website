import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import MediumCard from '@/components/MediumCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Navbar />
      <section className="text-green-400 body-font bg-gradient-to-r from-gray-900 to-black">
        <Banner />
      </section>
      <section className=" body-font bg-white">
        <WhyUs />
        {/* <section id='itinerary' className='mb-10'>
          <MediumCard title='Courses' />
        </section>
        <Testimonials /> */}

        <Faq />
        <Footer />
      </section>

    </main>
  )
}
