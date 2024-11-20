import React from 'react'
import { Box, Typography, Rating } from '@mui/material'
import Image from 'mui-image';
import defaultProfile from "../../../assets/profile_default.png"
import StarIcon from '@mui/icons-material/Star';

/**
 * name, review, image, rating, date
 */
const ReviewItem = ({ name, image, review, rating, date }) => {
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
          // height: "10em",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          pt: 10,
          pb: 3,
          px: 4,
        }}
      >
        {/* profile image */}
        <Box
          sx={{
            borderRadius: "50%",
            position: "absolute",
            top: "-3em",
            left: "50%",
            transform: "translateX(-50%)",
            height: "110px",
            background: "rgba(246, 244, 238, 1)",
            overflow: "hidden",
            p: 1,
          }}
        >
          <Image src={image ? image : defaultProfile} fit="scale-down"/>
        </Box>
        <Box>
          <Rating 
            name="read-only" 
            value={rating} 
            readOnly 
            precision={.5}
            emptyIcon={<StarIcon style={{ opacity: 0.85 }} fontSize="inherit" />}
            size="large"
            sx={{
              opacity: .9,
              "& svg" : {
                filter: "drop-shadow( 1px 1px rgba(0, 0, 0, .15))"
              }
            }}
          />
        </Box>
        {/* review */}
        {review && <Box
          sx={{
            my: 2,

          }}
        >
          <Typography
            textAlign="center"
            variant='body1'
            letterSpacing={.25}
            lineHeight={1.5}
            fontStyle="italic"
            fontSize={19}
            sx={{
              opacity: .85
            }}
          >"{review}"</Typography>
        </Box>}

        <Box
          mt={3}
        >
        <Typography
          textAlign="center"
          variant='body1'
          letterSpacing={.25}
          lineHeight={1.5}
          fontStyle="italic"
          fontSize={19}
          sx={{
            opacity: .85
          }}
        >
          - {name}
        </Typography>
        <Typography 
          variant="subtitle1"
          textAlign="center"
          fontSize={15}
          letterSpacing={.25}
          sx={{
            opacity: .65
          }}
        >
          {date.toLocaleDateString()}
        </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ReviewItem

