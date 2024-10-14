import React from 'react'
import { Box, Typography } from '@mui/material'


const Services = () => {


  return (
    <Box
      sx={{
        pt: 12,
        pb: 8,
      }}
    >
      <Typography 
        variant='h4'
        sx={{
          letterSpacing: .75,
          mb: 8,
        }}
        align='center'
      >
        The Services we offer
      </Typography>
      <Box
        sx={{
          background: "lightgrey",
          height: "70vh",
          width: "100%",
        }}
      >

      </Box>
    </Box>
  )
}

export default Services