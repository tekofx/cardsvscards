import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import '../index.css'
import { Container } from "@mui/system";
import NewGame from '../components/NewGame';
import { useState } from "react";

function Home() {
    const [newGame, setNewGame] = useState(false);
    const toggleNewGame = () => {
        setNewGame(!newGame);
    }

    return (
        <Container maxWidth='xl'>
            <Typography variant="h1">Cards Against Cards</Typography>
            <Typography>Elige una partida</Typography>
            <Button onClick={toggleNewGame}>Crear partida</Button>
            <Button>Unirse a partida</Button>
            {newGame ? <NewGame /> : null}


        </Container>
    );
}
export default Home;