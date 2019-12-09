import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: 'Roboto, sans-serif'
    },
    palette: {
        primary: {
            main: '#ffffff',
            light: '#ffffff',
            Dark: '#cccccc',
            contrastText: '#000000'
        },
        secondary: {
            main: '#822d8c',
            light: '#484848',
            Dark: '#000000',
            contrastText: '#ffffff'
        },
        shape: {
            borderRadius: 0
        }
    }
});

export default theme;