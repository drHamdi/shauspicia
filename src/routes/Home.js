import React from 'react'
import Navbar from '../components/Navbar'
import Hero from'../components/Hero'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
           <Navbar />
           <Hero />
           <Pricing />
           <Testimonials />
           <Faq />
           <Footer />
    </>
  )
}

export default Home