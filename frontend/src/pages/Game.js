import React from "react";
import { Typography } from "@mui/material";
import '../index.css'
import { Container } from "@mui/system";
import { useState } from "react";
import { Grid } from "@mui/material";
import Cookies from "universal-cookie";
import { getUsers } from "../connection/connection";
import { useEffect } from "react";
import UsersList from "../components/UsersList";

const cookies = new Cookies();
export default function Game() {


    return (
        <Container maxWidth='xl'>
            <Typography variant="h1">Cards Against Cards</Typography>
            <Grid container>
                <Grid item lg={10}>
                </Grid>
                <Grid item lg={2}>
                    <UsersList />
                </Grid>

            </Grid>

        </Container >
    );
}