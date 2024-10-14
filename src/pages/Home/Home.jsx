import React from 'react'
import Header from './Header'

import { Box } from '@mui/material'
import FeaturedCollection from './FeaturedCollection'


const Home = () => {
  return (
    <Box 
      sx={{
        pt: { lg: 12}
      }}
    >
      <Header/>
      <FeaturedCollection/>
    </Box>
  )
}

export default Home