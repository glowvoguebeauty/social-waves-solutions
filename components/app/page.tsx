'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustSection } from '@/components/sections/trust-section'
import { FeaturedCourses } from '@/components/sections/featured-courses'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { Testimonials } from '@/components/sections/testimonials'
import { CertificateShowcase } from '@/components/sections/certificate-showcase'
import { FinalCTA } from '@/components/sections/final-cta'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-on-scroll', {
        scrollTrigger: {
          trigger: '.animate-on-scroll',
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CertificateShowcase />
      <FinalCTA />
      <Footer />
    </main>
  )
}