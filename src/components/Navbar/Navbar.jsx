import React from 'react'
import { Box, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, ButtonBase } from '@mui/material'
import Image from 'mui-image'
import banner from "../../assets/ifd_banner.png"
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from './Searchbar';
/**
 * HOME | SHOP | SERVICES | ABOUT US | CONTACT    (ICONS) SEARCH | PROFILE | CART
 */


const menuItems = [
  { title: "Home", value: "home" },
  { title: "Shop", value: "shop" },
  { title: "Services", value: "services" },
  { title: "About Us", value: "about" },
  { title: "Contact", value: "contact" },
];


const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const Navbar = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{background: "none", boxShadow: "none"}}>
          <Toolbar>
            <Box
              sx={{
              height: {xs: 50, sm: 80, md: 100},
              width: "auto",
              }}
            >
              <Image 
                src={banner} 
                alt="ifd-logo" 
                fit="scale-down"
                duration={100}
              />
            </Box>
            <Box sx={{ flexGrow: 1,display: "flex", alignItems: "center", width: "100%", justifyContent: "right" }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 3, justifyContent: "center"}}>
                {menuItems.map((item) => <ButtonBase key={item.value}>
                  <Typography 
                    variant='h6'
                    color="text.primary"
                    sx={{
                      letterSpacing: .5,
                      fontSize: {xs: "1.25em"},
                      textTransform: "uppercase",                     
                    }}
                  >
                    {item.title}
                  </Typography>
                </ButtonBase>)}
              </Box>
              <Box>
                {/* ICONS (3) */}
                <Searchbar/>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar /> */}
      {/* <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container> */}

    </>
  )
}

export default Navbar