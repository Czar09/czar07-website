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
import WorkedWith from '@/components/WorkedWith'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scroll-smooth '>
      <Banner />
      <div className='bg-[url(https://juspay.in/img_products_hero.svg)] bg-no-repeat bg-left-bottom'>
      <WhyUs />
      <WorkedWith/>
      </div>
      <Services/>
      <Courses />
      <Faq />
    </main>
  )
}
