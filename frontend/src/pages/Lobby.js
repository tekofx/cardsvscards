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

    return (
        <Container maxWidth='xl'>
            <Typography variant="h1">Cards Against Cards</Typography>
            <Typography>Esperando para empezar la partida</Typography>

        </Container >
    );
}
export default Home;