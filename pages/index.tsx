import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import WhyUs from '@/components/WhyUs'
import Faq from '@/components/Faq'
import Courses from '@/components/Courses'
import Services from '@/components/Services'
import WorkedWith from '@/components/WorkedWith'
import Faq2 from '@/components/Faq2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scroll-smooth '>
      <Banner />
      <div className='px-4 md:px-20'>

      <div className='bg-[url(https://juspay.in/img_products_hero.svg)] bg-no-repeat bg-left-bottom'>
      <WhyUs />
      <WorkedWith/>
      </div>
      <Services/>
      <Courses />
      <Faq2 />
      </div>
    </main>
  )
}