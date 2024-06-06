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
        fontFamily: "Montserrat",
        h1: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 700,
        },
        h2: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 600,
        },
        h3: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 600,
        },
        h4: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 500,
        },
        h5: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 500,
        },
        h6: {
            fontFamily: "Oswald",
            textTransform: "uppercase",
            fontWeight: 400,
        },
    }
});