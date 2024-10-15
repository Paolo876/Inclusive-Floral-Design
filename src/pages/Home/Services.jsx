import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'mui-image'

import banner from "../../assets/hp_services_bg1.webp"

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
      {/* <Typography 
        variant='h4'
        sx={{
          letterSpacing: .75,
          mb: 8,
        }}
        align='center'
      >
        The Services we offer
      </Typography> */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography 
              variant='h3'
              sx={{
                // letterSpacing: .75,
                fontWeight: 400,
                mb: 8,
              }}
              align='center'
            >
              The Services we offer
            </Typography>
          </Box>
          <Box>
            <Image src={banner} alt="banner-img" fit="scale-down"/>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Services