import React from 'react'
import Header from './Header'

import { Box } from '@mui/material'


const Home = () => {
  return (
    <Box 
      sx={{
        pt: { lg: 12}
      }}
    >
      <Header/>
    </Box>
  )
}

export default Home