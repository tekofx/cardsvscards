const express = require('express');
const router = express.Router();
const games = require('../games.json')
const decksJSON = require('../decks.json')
const data = require('../model/data')

router.get('/', async function (req, res) {
    res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(games));
});

router.get('/:id', async function (req, res) {
    res.header("Content-Type", 'application/json');
    var game = data.getGame(req.params.id);
    return res.send(JSON.stringify(game));
});

// Create a game
router.post('/', async function (req, res) {
    // Get free game id
    var gameId = games.length + 1;
    var decks = req.body.decks;
    var user = req.body.username;

    // Select random cards from decks
    var cards = [];
    for (var i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * decks.length);
        var deckId = decks[random];
        var deck = decksJSON.find(deck => deck.id === deckId);
        var card = deck.cards.white[Math.floor(Math.random() * deck.cards.white.length)];
        cards.push(card);
    }

    user = { id: 0, owner: true, username: user, cards: cards };
    var game = {
        id: gameId,
        decks: decks,
        users: [user],
    }
    games.push(game);
    return res.status(200).send(games);
});

router.put('/:id/join', async function (req, res) {
    var gameId = parseInt(req.params.id);
    var game = games.find(game => game.id === gameId);
    var user = req.body.username;
    var cards = [];
    for (var i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * game.decks.length);
        var deckId = game.decks[random];
        var deck = decksJSON.find(deck => deck.id === deckId);
        var card = deck.cards.white[Math.floor(Math.random() * deck.cards.white.length)];
        cards.push(card);
    }
    var user = { id: game.users.length, owner: false, username: user, cards: cards };
    game.users.push(user);
    return res.status(200).send(game);
});

module.exports = router;