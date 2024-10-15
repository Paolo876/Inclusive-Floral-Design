import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'mui-image'

import banner from "../../assets/hp_services_bg1.webp"


const servicesListItems = [
  { 
    title: "Fresh Flower Arrangements", 
    description: "We offer customized or pre-made bouquets for various occasions like birthdays, anniversaries, and celebrations." 
  },
  { 
    title: "Event Arrangements Bundle", 
    description: "Specialized floral arrangements for events such as weddings, parties, and corporate events." 
  },
  { 
    title: "Sympathy and Funeral Flowers", 
    description: "We provide wreaths, sprays, and other arrangements to express condolences, memorial services and tributes." 
  },
  { 
    title: "Seasonal and Holiday Specials", 
    description: "Special arrangements for holidays like Valentine's Day, Mother's Day, and Christmas, and a selection of seasonal flowers during winter or spring." 
  },
  { 
    title: "Delivery Services", 
    description: "We offer free same-day or scheduled deliveries within a certain radius from our shop in the Los Angeles area.",
    subDescription: "(an additional fee is charged for locations 5 miles or greater.)"
  },
  {
    title: "Subscription Services", 
    description: "Regular flower deliveries, either weekly or monthly, for homes or businesses." 
  },
]

const Services = () => {


  return (
    <Box
      sx={{
        mt: 8,
        pt: 12,
        pb: 8,
        background: "lightgrey",
        // height: "70vh",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              maxWidth: "65%",
              pr: 4
            }}
          >
            <Typography 
              variant='h3'
              sx={{
                // letterSpacing: .75,
                fontWeight: 400,
                mb: 12,
              }}
              align='left'
            >
              The Services we offer
            </Typography>

            {/* services list container */}
            <Box 
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {servicesListItems.map((item, id) => (
                <Box 
                  id={id}
                  sx={{
                    mb: 8,
                    pr: 8
                  }}
                >
                <Typography 
                  variant="h6"
                  sx={{
                    mb: 2
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant='p'>{item.description}</Typography>
                {item.subDescription && <Typography sx={{ fontStyle: "italic"}} component="small"> {item.subDescription}</Typography>}
              </Box>))}
            </Box>
          </Box>
          <Box 
            sx={{
              position: "relative",
              "&::before": {
                content:"''",
                position: "absolute",
                bottom: "-4%",
                left:"-6%",
                border: 6,
                borderColor: "secondary.main",
                opacity: .3,
                height: "100%",
                width: "100%",
              }
            }}
          >
            <Image 
              src={banner} 
              alt="banner-img" 
              fit="scale-down" 
              duration={300} 
              sx={{
                position: "relative",
              }}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Services