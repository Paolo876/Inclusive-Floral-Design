import React from 'react'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Box
      sx={{
        height: "80vh",
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
        Our Story
      </Typography>
    </Box>
  )
}

export default About

// our story