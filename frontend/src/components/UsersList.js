import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import Theme from '../Theme';
import Cookies from "universal-cookie";
import { useState, useEffect } from 'react';
import { getUsers } from "../connection/connection";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const cookies = new Cookies();

export default function CardsList() {
    const [users, setUsers] = useState([]);
    const loadUsers = async () => {
        console.log(cookies.get('gameId'));
        var aux = await getUsers(cookies.get('gameId'));
        setUsers(aux);

    }

    useEffect(() => {
        const fetchData = async () => {
            await loadUsers();
        }
        fetchData();

    }, []);

    return (
        <ThemeProvider theme={Theme}>
            <List>
                {users.map((item, index) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.username} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </ThemeProvider>
    );
}