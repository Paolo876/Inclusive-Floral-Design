import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'mui-image'
import banner from "../assets/ifd_banner.png"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey"
      }}
    >
      <Container>
        <Box>
          <Box>
            <Image src={banner} alt="banner" fit="scale-down"/>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer