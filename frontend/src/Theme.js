import { createTheme } from '@mui/material/styles';

var Theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0099b2',
        },
        secondary: {
            main: '#edf069',
        },
        background: {
            main: '#101010',
            paper: '#28272a',
        },
        error: {
            main: '#f0a19c',
        },
        info: {
            main: '#259bf9',
        },
    },
    components: {
        MuiAvatar: {
            variants: [
                {
                    props: { variant: 'logo' },
                    style: {
                        width: '10%',
                        height: 'auto',
                        maxWidth: '10%',
                        maxHeight: '10%',
                    }
                }
            ]
        },
        MuiAppBar: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    background: '#161b22',
                },
            },
        }

    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
        ].join(','),

        whiteCard: {
            fontSize: '1.5rem',
            color: '#000',
        },
        blackCard: {
            fontSize: '1.5rem',
            color: '#fff',
        }
    },

});


/* These atrributes overrides the top attributes*/
Theme.typography.h1 = {
    fontSize: '2rem',
    color: '#fff',


    paddingBottom: '0.5rem',
    paddingTop: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
        paddingBottom: '0.7rem',
        paddingTop: '0.7rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },
};

Theme.typography.h2 = {
    color: '#fff',

    fontSize: '2.0rem',
    paddingBottom: '0.3rem',
    paddingTop: '0.3rem',

    '@media (min-width:600px)': {
        fontSize: '2.5rem',
        paddingBottom: '0.5rem',
        paddingTop: '0.5rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '3rem',
        paddingBottom: '0.7rem',
        paddingTop: '0.7rem',
    },
};

Theme.typography.h3 = {
    color: '#fff',


    '@media (min-width:600px)': {
        fontSize: '2.0rem',
        paddingBottom: '0.2rem',
        paddingTop: '0.2rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
        paddingBottom: '0.4rem',
        paddingTop: '0.4rem',
    },
};

Theme.typography.h4 = {
    color: '#fff',


    '@media (min-width:600px)': {
        fontSize: '1.8em',
        paddingBottom: '0.1rem',
        paddingTop: '0.1rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
        paddingBottom: '0.0rem',
        paddingTop: '0.0rem',
    },
};

Theme.typography.body1 = {
    color: '#fff',

    fontSize: '0.8rem',
    textAlign: 'justify',
    paddingBottom: '0.8rem',


    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};


//Theme = responsiveFontSizes(Theme);

export default Theme;