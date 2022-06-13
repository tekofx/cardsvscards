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
import { joinGame } from '../connection/connection';


export default function JoinGame() {
    const [gameID, setGameID] = useState("");
    const [username, setUsername] = useState("");

    const handleGameIDInput = (event) => {
        event.preventDefault();
        setGameID(event.target.value);
    }

    const handleUsernameInput = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handleJoinGame = async (event) => {
        await joinGame(gameID, username);
    }


    return (
        <ThemeProvider theme={Theme}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField onChange={handleGameIDInput} label="GameID"></TextField>
                    <TextField onChange={handleUsernameInput} label="Username"></TextField>

                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleJoinGame}>Aceptar</Button>
                </Grid>
            </Grid >
        </ThemeProvider >
    );
}
