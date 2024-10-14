import { Box, Typography } from '@mui/material'
import React from 'react'

const FeaturedCollection = () => {
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
        Our Featured Collection
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "5em 5em",
          mx: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
        <Box sx={{border: 1, borderColor: "white", backgroundColor: "rgba(255,255,255,.15)", height: "480px", width: "450px"}}></Box>
      </Box>
    </Box>
  )
}

export default FeaturedCollection