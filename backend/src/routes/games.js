const express = require('express');
const router = express.Router();
const games = require('../games.json')

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


module.exports = router;