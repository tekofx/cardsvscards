import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Decks from '../Cards.json'

export default function CheckboxList() {
    const [checked, setChecked] = React.useState([0]);

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

    const showDeck = (value) => () => {
        console.log(Object.keys(Decks))

        console.log(Decks[value])
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, maxHeight: 100, bgcolor: 'background.paper' }}>
            {Object.keys(Decks).map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <IconButton edge="end" aria-label="comments" onClick={showDeck('Furry')}>
                            <CommentIcon />
                        </IconButton>
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon onClick={handleToggle(value)}>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
