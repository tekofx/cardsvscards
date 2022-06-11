import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Theme';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {

    var type = props.type;
    var backgroundColor = '';
    var typographyVariant = '';
    if (type === "black") {
        backgroundColor = 'black';
        typographyVariant = 'blackCard';
    } else {
        backgroundColor = 'white';
        typographyVariant = 'whiteCard';
    }

    return (
        <ThemeProvider theme={Theme}>
            <Card style={{ backgroundColor: backgroundColor }} variant='outlined' sx={{ minWidth: 200, minHeight: 300 }} >
                <CardContent>
                    <Typography variant={typographyVariant}>
                        {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
