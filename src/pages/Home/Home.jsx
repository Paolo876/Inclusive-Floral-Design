import React from 'react'
import Header from './Header'

import { Box } from '@mui/material'
import FeaturedCollection from './FeaturedCollection/FeaturedCollection'
import Services from './Services'
import Footer from "../../components/Footer"
import About from './About'

const Home = () => {
  return (
    <Box 
      sx={{
        pt: { lg: 12}
      }}
    >
      <Header/>
      <FeaturedCollection/>
      <Services/>
      <About/>
      <Footer/>
    </Box>
  )
}

export default Home