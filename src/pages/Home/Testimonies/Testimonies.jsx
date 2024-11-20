import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import ReviewItem from './ReviewItem'
import Carousel from 'react-material-ui-carousel'
/**
 * name, review, image, rating, date
 */
const MOCK_DATA = [
  {
    id: 1,
    name: "John Doe", 
    review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nam fames praesent auctor pellentesque luctus fames inceptos at.",
    image: null,
    rating: 5,
    date: new Date()
  },
  {
    id: 2,
    name: "Jane Smith", 
    review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sociosqu ligula egestas ex aptent nulla conubia vitae odio. Ut arcu dapibus augue habitasse curae himenaeos nulla? Amet integer quis dignissim hac ante felis sollicitudin? Tincidunt porta nisl elementum viverra luctus vel orci.",
    image: null,
    rating: 4.5,
    date: new Date()
  },
  {
    id: 3,
    name: "Mike White", 
    review: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    image: null,
    rating: 3.5,
    date: new Date()
  },
];

const Testimonies = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        pt: 12,
        pb: 8,
      }}
    >
      <Typography 
        variant='h4'
        sx={{
          letterSpacing: .75,
          mb: 10,
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
            }}
          >
            {MOCK_DATA.map(item => <ReviewItem 
              key={item.id} 
              name={item.name} 
              review={item.review} 
              image={item.image} 
              rating={item.rating} 
              date={item.date}
            />)}
          </Box>
        </Carousel>

      </Container>
    </Box>
  )
}

export default Testimonies

// https://developers.google.com/my-business/content/review-data#list_all_reviews
