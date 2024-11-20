import React from 'react'
import Header from './Header'

import { Box } from '@mui/material'
import FeaturedCollection from './FeaturedCollection/FeaturedCollection'
import Services from './Services'
import Footer from "../../components/Footer"
import Testimonies from './Testimonies/Testimonies'

const Home = () => {
  return (
    <Box 
      sx={{
        pt: { lg: 10}
      }}
    >
      <Header/>
      <FeaturedCollection/>
      <Services/>
      <Testimonies/>
      <Footer/>
    </Box>
  )
}

export default Home