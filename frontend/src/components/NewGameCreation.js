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
import { useNavigate } from 'react-router-dom';



export default function NewGameCreation() {
    const navigate = useNavigate();

    const [checked, setChecked] = useState([]);
    const [deck, setDeck] = useState({ name: "deck1", id: "1", cards: [{ id: 1, content: "uwu" }] });
    const [decks, setDecks] = useState([{ name: "deck1", id: "1", cards: [{ id: 1, content: "uwu" }] }, { name: "deck2", id: "2" }]);
    const [username, setUsername] = useState("");

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

    const handleUsernameInput = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const changeDeck = (value) => () => {
        setDeck(value);

    };
    const loadDecks = async () => {
        var aux = await getDecks();
        setDecks(aux);
        setDeck(aux[0]);

    }

    const createGameButton = async (event) => {
        // Get a list of id of decks
        await createGame(username, checked);
        navigate('/lobby')

    }

    useEffect(() => {
        const fetchData = async () => {
            await loadDecks();
        }
        fetchData();

    }, []);


    return (
        <ThemeProvider theme={Theme}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField autoFocus margin="dense" id="name" fullWidth label="Username" type="username" variant="standard" onChange={handleUsernameInput} />
                    <List sx={{ width: '100%', maxHeight: '50%', bgcolor: 'background.paper' }}>
                        {decks.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem
                                    key={value.id}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} dense onClick={changeDeck(value)}>
                                        <ListItemIcon onClick={handleToggle(value.id)}>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value.id) !== -1}
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
                    <Button onClick={createGameButton}>Aceptar</Button>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Mazo {deck.name}</Typography>
                    <CardsList deck={deck.cards} />

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}