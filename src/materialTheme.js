import { createTheme } from '@mui/material';


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#4f7c98',
        },
        secondary: {
          main: '#85576f',
        },
        background: {
          default: '#f3eded',
          paper: '#efebe5',
        },
        info: {
          main: '#c1d2d2',
        },
        text: {
          primary: '#353232',
        },
      },
    typography: {
        fontFamily: "Forum",
        h1: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 700,
        },
        h2: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 600,
        },
        h3: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 600,
        },
        h4: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 500,
        },
        h5: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 500,
        },
        h6: {
            fontFamily: "Poiret One",
            textTransform: "uppercase",
            fontWeight: 400,
        },
        p: {
            fontFamily: "Forum",
            fontWeight: 400,
        },
    }
});