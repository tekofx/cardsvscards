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

export default function BasicCard() {
    return (
        <ThemeProvider theme={Theme}>
            <Card variant='outlined' sx={{ maxWidth: 275 }}>
                <CardContent>
                    <Typography >
                        Lorem ipsum dolor
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
