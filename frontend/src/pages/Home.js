import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import '../index.css'
import { Container } from "@mui/system";
import NewGame from '../components/NewGameCreation';
import { useState } from "react";
import JoinGame from '../components/JoinGame';
import { Grid } from "@mui/material";

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
            <Button onClick={toggleNewGame}>Unirse a partida</Button>
            {newGame ? <NewGame /> : <JoinGame />}

        </Container >
    );
}
export default Home;