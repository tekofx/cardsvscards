import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Repository from './Repository';
import { useEffect } from 'react';
import { Skeleton } from '@mui/material';
import Card from './Card'

export default function RepositoryList(props) {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={{ xs: 1, sm: 1, md: 3, lg: 4 }} columns={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 12 }}>
                {repos.map((item, index) => (

                    <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={index} >
                        <Card title={item.name} description={item.description} url={item.html_url} img={item.img} />
                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}