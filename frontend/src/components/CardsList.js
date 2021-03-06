import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import Theme from '../Theme';
import Card from './Card'

export default function CardsList(props) {

    return (
        <ThemeProvider theme={Theme}>
            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} overflow={'auto'} maxHeight={'80%'}>
                {props['deck'].map((item, index) => (
                    <Grid item xs={6} sm={3} md={3} lg={3} xl={3} key={index} >
                        <Card text={item.content} type={item.type} />
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
}