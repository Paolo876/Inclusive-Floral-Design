import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'mui-image'
import banner from "../assets/ifd_banner.png"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        pt: 5,
        pb: 5
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Box
            sx={{
              height: "120px"
            }}
          >
            <Image src={banner} alt="banner" fit="scale-down"/>
          </Box>

          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.1em"}}>Store Information</Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start"
                }}
              >
                <Box><LocationOnIcon/></Box>
                <Box><Typography>1802 N. Broadway<Box component="br"></Box>Los Angeles, CA 90031</Typography></Box>
              </Box>
              <Box><Button startIcon={<GoogleIcon/>}>Navigate with Google Maps</Button></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer