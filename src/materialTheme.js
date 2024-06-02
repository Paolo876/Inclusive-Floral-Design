import { createTheme } from '@mui/material';


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
            default: '#c4a174',
            paper: '#d4b992',
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