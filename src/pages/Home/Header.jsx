import React from 'react'
import bg from "../../assets/header_bg.avif"
import Image from 'mui-image'
import { Box, Button, Typography } from '@mui/material'
import bannerImg from "../../assets/ifd_banner.png"
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate()


  return (
    <Box sx={{
      position: "relative",
    }}>
      {/* background */}
      <Box sx={{height: "40em", pointerEvents: "none"}}>
        <Image src={bg} alt="header-bg" fit='cover' sx={{filter: "brightness(90%) contrast(92%)"}} duration={300}/>
      </Box>
      {/* message */}
      <Box
        sx={{
          position:"absolute",
          left: "50%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          px: 6,
          py: 4,
          "&::before": {
            content: '""',
            top: 0,
            left: 0,
            backdropFilter: "blur(2px) contrast(10%) brightness(180%) opacity(85%)",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -1
          },
          "&::after": {
            content: '""',
            top: "50%",
            left: "50%",
            border: 1,
            borderColor: "white",
            position: "absolute",
            height: "105%",
            width: "102.5%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            opacity: .75
          } 
        }}
      >
        <Box sx={{height: "150px"}}>
          <Image src={bannerImg} alt="banner-img" fit="scale-down" sx={{pointerEvents: "none"}} duration={450}/>
        </Box>
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            mt: 6
          }}
        >
          <Button 
            variant="contained"
            color='secondary'
            size="large"
            sx={{
              mx: "auto",
              borderRadius: 0,
              letterSpacing: 1.8,
              px: 5
            }}
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Header