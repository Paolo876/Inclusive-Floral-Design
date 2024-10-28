import React from 'react'
import { Box, Typography } from '@mui/material'
import ReviewItem from './ReviewItem'

const Testimonies = () => {
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
        What our Customers say
      </Typography>
      <Box>

      </Box>
    </Box>
  )
}

export default Testimonies

// https://developers.google.com/my-business/content/review-data#list_all_reviews
