import React from "react";
import { Typography } from "@mui/material";
import '../index.css'
import { Container } from "@mui/system";
import { useState } from "react";
import { Grid } from "@mui/material";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Game() {
    const [newGame, setNewGame] = useState(false);
    const toggleNewGame = () => {
        setNewGame(!newGame);
    }

    return (
        <Container maxWidth='xl'>
            <Typography variant="h1">Cards Against Cards</Typography>

        </Container >
    );
}