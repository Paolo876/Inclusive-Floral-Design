import React from 'react'
import { useNavigate } from 'react-router'
import { Box, Button, ButtonBase, Container, Typography } from '@mui/material'
import Image from 'mui-image'
import banner from "../assets/ifd_banner.png"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "grey",
        pt: 10,
        pb: 5
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mb: 8,
          }}
        >
          <Box
            sx={{
              height: "95px"
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
              <Box>
                <Button 
                  startIcon={<GoogleIcon color="info"/>} 
                  variant='outlined' 
                  color="info"
                  href="https://www.google.com/maps/dir//inclusive+floral+designs/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xc96ffd7dfc3e287:0x7b5d0ba418e1ccd?sa=X&ved=1t:3061&ictx=111"
                  target="_blank"
                >
                  Navigate with Google Maps
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.2em"}}>Contact Information</Typography>
            <Box>
              <Box
                sx={{
                  mb: 2
                }}
              >
                <Typography 
                  sx={{
                    lineHeight: 1.4,
                    fontSize: "1.1em"
                  }}
                >
                  Call Jimmy or Lupe
                </Typography>
              </Box>
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  gap: 1,
                  px: 1,
                  mb: 1,
                }}
              >
                <Box><LocalPhoneIcon/></Box>
                <Typography>(323) 332 - 2280</Typography>
              </ButtonBase>
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  gap: 1,
                  px: 1,
                  mb: 1,
                }}
              >
                <Box><LocalPhoneIcon/></Box>
                <Typography>(562) 753 - 3215</Typography>
              </ButtonBase>

            </Box>
          </Box>
          <Box>
            <Typography sx={{fontWeight: 600, letterSpacing: .5, mb: 3, fontSize: "1.2em"}}>Socials</Typography>
            <Box>
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  px: 1,
                  mb: 1,
                  gap: 1
                }}
              >
                <Box><EmailIcon/></Box>
                <Typography>ifdflowers48@gmail.com</Typography>
              </ButtonBase>
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  gap: 1,
                  px: 1,
                  mb: 1,
                }}
              >
                <Box><InstagramIcon/></Box>
                <Typography>Instagram</Typography>
              </ButtonBase>
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  gap: 1,
                  px: 1,
                  mb: 1,
                }}
              >
                <Box><FacebookIcon/></Box>
                <Typography>Facebook</Typography>
              </ButtonBase>
            </Box>
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