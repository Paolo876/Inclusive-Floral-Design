import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
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
    title: "Sympathy and Funeral Service", 
    description: "We provide wreaths, sprays, and other arrangements to express condolences, memorial services and tributes." 
    // description: "We provide wreaths, sprays, and other arrangements to express condolences and tributes. A part of our memorial services is cleaning the headstone and" 
  },
  { 
    title: "Memorial Detailing Service", 
    description: "We offer headstone detailing and landscaping the land of a departed loved one's grave in the cemetery." 
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
                  key={id}
                  sx={{
                    mb: 7,
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
            <Box>
              <Button variant='outlined' sx={{letterSpacing: 1.5}} color='primary' size="large">See All Our Services</Button>
            </Box>
          </Box>
          <Box 
            sx={{
              position: "relative",
              "&::before": {
                content:"''",
                position: "absolute",
                bottom: "-7%",
                left:"-6%",
                border: 12,
                borderColor: "secondary.main",
                opacity: .2,
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
                filter: "brightness(100%) contrast(90%)"
              }}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Services