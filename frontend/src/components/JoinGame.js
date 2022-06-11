import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, Grid, ThemeProvider, Typography } from '@mui/material';
import CardsList from './CardsList';
import Theme from '../Theme';
import { useEffect, useState } from 'react';
import { getDecks, createGame } from '../connection/connection';


export default function JoinGame() {

    return (
        <ThemeProvider theme={Theme}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField label="GameID"></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button>Aceptar</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
