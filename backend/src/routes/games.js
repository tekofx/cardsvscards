const express = require('express');
const router = express.Router();
const games = require('../games.json')
const decksJSON = require('../decks.json')

router.get('/', async function (req, res) {
    res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(games));
});

router.get('/:id', async function (req, res) {
    var deckId = parseInt(req.params.id);
    res.header("Content-Type", 'application/json');
    // Get from JSON the deck with the id
    var deck = games.find(deck => deck.id === deckId);
    return res.send(JSON.stringify(deck));
});


// Create a game
router.post('/', async function (req, res) {
    var gameId = 1;// TODO: get a free id
    var decks = req.body.decks;
    var user = req.body.username;

    // Select random cards from decks
    var cards = [];
    for (var i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * decks.length);
        var deckId = decks[random];
        var deck = decksJSON.find(deck => deck.id === deckId);
        var card = deck.cards[Math.floor(Math.random() * deck.cards.length)];
        cards.push(card);
    }

    user = { id: 0, owner: true, username: user, cards: cards };
    var game = {
        id: gameId,
        decks: decks,
        users: [user],

    }
    games.push(game);
    console.log(JSON.stringify(game));

    return res.status(200).send("Game created");
});

module.exports = router;