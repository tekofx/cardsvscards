import * as React from 'react';
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
import Decks from '../Cards.json'
import Theme from '../Theme';


export default function FormDialog() {
    const [checked, setChecked] = React.useState([0]);
    const [deck, setDeck] = React.useState(Decks[0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const changeDeck = (value) => () => {
        setDeck(value);

    };

    return (
        <ThemeProvider theme={Theme}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField autoFocus margin="dense" id="name" fullWidth label="Username" type="username" variant="standard" />
                    <List sx={{ width: '100%', maxHeight: 100, bgcolor: 'background.paper' }}>
                        {Decks.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem
                                    key={value.name}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} dense onClick={changeDeck(value)}>
                                        <ListItemIcon onClick={handleToggle(value.name)}>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value.name) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value.name} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Mazo {deck.name}</Typography>
                    <CardsList deck={deck.cards} />

                </Grid>
                <Grid item xs={12}>
                    <Button>Aceptar</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}