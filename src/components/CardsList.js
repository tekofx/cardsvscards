import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card'

export default function CardsList(props) {

    return (
        <Box sx={{ flexGrow: 1 }} >
            {console.log(props)}
            <Grid container spacing={{ xs: 1, sm: 1, md: 3, lg: 4 }} columns={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 12 }}>
                {props['deck'].map((item, index) => (

                    <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={index} >
                        <Card text={item.content} />
                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}