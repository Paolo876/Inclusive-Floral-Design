import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'mui-image'
import banner from "../assets/ifd_banner.png"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        pt: 5,
        pb: 1
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mb: 5,
          }}
        >
          <Box
            sx={{
              height: "100px"
            }}
          >
            <Image src={banner} alt="banner" fit="scale-down"/>
          </Box>

          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.2em"}}>Store Location</Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: 1,
                  mb: 3,
                  px: 1,
                }}
              >
                <Box>
                  <LocationOnIcon color='info'/>
                </Box>
                <Box>
                  <Typography 
                    sx={{
                      lineHeight: 1.4,
                      fontSize: "1.1em"
                    }}
                  >
                    1802 N. Broadway<Box component="br"></Box>Los Angeles, CA 90031
                  </Typography>
                </Box>
              </Box>
              <Box><Button startIcon={<GoogleIcon color="info"/>} variant='outlined' color="info">Navigate with Google Maps</Button></Box>
            </Box>
          </Box>

          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.2em"}}>Contact Information</Typography>

          </Box>
          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.2em"}}>Socials</Typography>

          </Box>
        </Box>
      </Container>
      <Box>
        <Typography 
          sx={{
            fontSize: {xs: 12, sm:13, md: 14, lg:15}, 
            opacity: .9
          }}
          align="center"
        >
          © 2024 Inclusive Floral Designs LA, All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer