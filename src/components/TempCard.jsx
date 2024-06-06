import React from 'react'
import { Typography, Box } from "@mui/material";
import Image from "mui-image";
import logo from "../assets/ifd_logo_bw.png"
import banner from "../assets/ifd_banner.png"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const textStyles = {
  fontSize: {xs: ".8em", sm: ".9em", md: "1em"},
  fontFamily: "Montserrat",
  fontWeight: 500,
  opacity: .7,
  letterSpacing: .25,
}

const boxStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  color: "#352e37",
  mt: 2,
  
}

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: "1.2em",
  color: "#063F57",
}


const TempCard = () => {
  return (
    <Box align="center" sx={{my: 5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {/* <Box
        sx={{
        height: {xs: 50, sm: 80, md: 100},
        width: "auto",
        mb: 2,
        }}
      >
        <Image 
        src={logo} 
        alt="ifd-logo" 
        fit="scale-down"
        duration={100}
        />
      </Box> */}
      <Box
        sx={{
        // height: {xs: 50, sm: 80, md: 100},
        width: "auto",
        mb: 2,
        }}
      >
        <Image 
        src={banner} 
        alt="ifd-logo" 
        fit="scale-down"
        duration={100}
        />
      </Box>
      {/* <Typography variant="h5">INCLUSIVE FLORAL DESIGNS</Typography> */}
      <Box my={5}>
        <Typography variant="p" sx={{fontStyle: "italic", opacity: .75, fontSize: "1.2em"}}>-website under construction-</Typography>
      </Box>
      <Box mt={8}>
        <Box sx={boxStyles}>
          <LocationOnIcon style={iconStyles}/>
          <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
            <Typography sx={textStyles}>
              1802 N. Broadway <Box component="br"></Box>Los Angeles, CA 90031
            </Typography>
          </Box>
        </Box>
        <Box sx={boxStyles}>
          <PhoneIcon style={iconStyles}/>
          <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
            <Typography sx={textStyles}>(323) 332 - 2280</Typography>
            <Typography sx={textStyles}>(562) 753 - 3215</Typography>
          </Box>
        </Box>
        <Box sx={boxStyles}>
          <EmailIcon style={iconStyles}/>
          <Box sx={{borderLeft: 1, borderColor: "rgba(0,0,0,0.15)", pl: 1}} align="left">
            <Typography sx={textStyles}>ifdflowers48@gmail.com</Typography>
          </Box>
        </Box>
      </Box> 
    </Box>
)
}

export default TempCard