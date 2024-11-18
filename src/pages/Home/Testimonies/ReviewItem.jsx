import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import Image from 'mui-image';
import defaultProfile from "../../../assets/profile_default.png"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';


const ReviewItem = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt:8,
      }}
    >
      <Box
        sx={{
          background: "rgba(246, 244, 238, 1)",
          position: "relative",
          height: "10em",
          borderRadius: "15px",
        }}
      >
        {/* profile image */}
        <Box
          sx={{
            borderRadius: "50%",
            position: "absolute",
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            height: "110px",
            background: "rgba(246, 244, 238, 1)",
            overflow: "hidden",
            p: 1,
          }}
        >
          <Image src={defaultProfile} fit="scale-down"/>
        </Box>

      </Box>
    </Box>
  )
}

export default ReviewItem

/**
 * name, review, image, rating, date
 */