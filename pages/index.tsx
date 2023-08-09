import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import MediumCard from '@/components/MediumCard'
import Courses from '@/components/Courses'
import Services from '@/components/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Banner />
      <WhyUs />
      <Services/>
      <Courses />
      <Faq />
    </main>
  )
}
