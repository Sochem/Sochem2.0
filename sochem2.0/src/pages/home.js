import React from 'react'
import Hero from "../components/Home/hero"
import Main from "../components/Home/main"
import Testimonial from "../components/Home/testimonials"
import Footer from '@/components/footer.js'
import What_we_offer from '../components/Home/what_we_offer'

const home = () => {
  return (
    <div>
        <Hero/>
        <What_we_offer/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default home