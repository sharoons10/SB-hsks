import React from 'react'
import Banner from '../../components/Banner'
import Catagories from './Catagories'
import Testimonials from './Testimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Catagories/>
       <Testimonials/>
       <OurServices/>
    </div>
  )
}

export default Home