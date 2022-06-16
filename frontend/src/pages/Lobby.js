import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import '../index.css'
import { Container } from "@mui/system";
import NewGame from '../components/NewGameCreation';
import { useState } from "react";
import JoinGame from '../components/JoinGame';
import UsersList from '../components/UsersList';
import { Grid } from "@mui/material";
import Cookies from "universal-cookie";
const cookies = new Cookies();


function Home() {
    console.log(cookies.get('userId'));
    console.log(cookies.get('gameId'));
    console.log(cookies)


    return (
        <Container maxWidth='xl'>
            <Typography variant="h1">Cards Against Cards</Typography>
            <Typography>Esperando para empezar la partida</Typography>
            <UsersList />


        </Container >
    );
}
export default Home;