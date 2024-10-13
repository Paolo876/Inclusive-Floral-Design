import React from 'react'
import { useLocation, NavLink, Link as ReactLink } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, ButtonBase, Link } from '@mui/material'
import Image from 'mui-image'
import logo_bw from "../../assets/ifd_logo_bw.png"
import Searchbar from './Searchbar';
import AccountIcon from './AccountIcon';
import CartIcon from './CartIcon';


const menuItems = [
  { title: "Home", value: "home", path: "/" },
  { title: "Shop", value: "shop", path: "/shop" },
  { title: "Services", value: "services", path: "/services" },
  { title: "About Us", value: "about", path: "/about" },
  { title: "Contact", value: "contact", path: "/contact" },
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
  const { pathname } = useLocation()

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{background: "none", boxShadow: "none"}}>
          <Toolbar sx={{mx: {md: 1, xl: 2}}}>
            <Box
              sx={{
              height: {xs: 50, sm: 60, md: 60, lg: 65},
              width: "auto",
              my: 1,
              cursor: "pointer"
              }}
            >
              <Image 
                src={logo_bw} 
                alt="ifd-logo" 
                fit="scale-down"
                duration={100}
              />
            </Box>
            <Box sx={{ flexGrow: 1,display: "flex", alignItems: "center", width: "100%", justifyContent: "right", gap: 4 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 3, justifyContent: "center"}}>
                {menuItems.map((item) => <Link key={item.value} to={item.path} component={ReactLink} sx={{textDecoration: "none", m:0, p:0}}>
                  <ButtonBase
                    sx={{
                      

                    }}
                  >
                    <Typography 
                      variant='h6'
                      color="text.primary"
                      sx={{
                        transition: "all .25s ease 0s",
                        letterSpacing: .5,
                        fontWeight: pathname === item.path ? 600 : 400,
                        opacity: pathname === item.path ? .8 : 1,
                        fontSize: {xs: "1.25em"},
                        textTransform: "uppercase",
                        "&:hover": {
                          opacity: 1,
                          fontWeight: 600,
                        }                
                      }}
                    >
                      {item.title}
                    </Typography>
                  </ButtonBase>
                </Link>)}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: .5, justifyContent: "center"}}>
                {/* ICONS (3) */}
                <Searchbar/>
                <CartIcon/>
                <AccountIcon/>
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