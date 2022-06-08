import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DecksList from './DecksList'
import { Typography } from '@mui/material';

export default function FormDialog() {

    return (
        <div>
            <Typography>Hola</Typography>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="username"
                fullWidth
                variant="standard"
            />
            <DecksList />
        </div>
    );
}