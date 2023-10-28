import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/stats'



export default function Home() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <Stats/>
    <Testimonials/>
    </>
  )
}
