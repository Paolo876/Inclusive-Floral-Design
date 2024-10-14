import React from 'react'
import Header from './Header'

import { Box } from '@mui/material'
import FeaturedCollection from './FeaturedCollection'
import Services from './Services'


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
    </Box>
  )
}

export default Home