import { Box, Typography } from '@mui/material'
import React from 'react'

const FeaturedCollection = () => {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
      }}
    >
      <Typography 
        variant='h4'
        sx={{
          letterSpacing: .75
        }}
        align='center'
      >
        Our Featured Collection
      </Typography>
    </Box>
  )
}

export default FeaturedCollection