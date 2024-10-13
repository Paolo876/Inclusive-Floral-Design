import React from 'react'
import bg from "../../assets/header_bg.avif"
import Image from 'mui-image'
import { Box } from '@mui/material'

const Header = () => {
  return (
    <Box>
      <Box sx={{height: "40em"}}>
        <Image src={bg} alt="header-bg" fit='cover'/>
      </Box>
    </Box>
  )
}

export default Header