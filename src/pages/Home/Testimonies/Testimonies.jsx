import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import ReviewItem from './ReviewItem'
import Carousel from 'react-material-ui-carousel'



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
      <Container maxWidth="xl">
        <Carousel
          indicators={true}
          interval={8000}
          duration={800} 
          navButtonsAlwaysInvisible={true}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-between",
              // height: "100%",
            }}>
            <ReviewItem/>
            <ReviewItem/>
            <ReviewItem/>
          </Box>
        </Carousel>

      </Container>
    </Box>
  )
}

export default Testimonies

// https://developers.google.com/my-business/content/review-data#list_all_reviews
