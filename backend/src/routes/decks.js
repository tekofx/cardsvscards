const express = require('express');
const router = express.Router();
const decks = require('../decks.json')

router.get('/', async function (req, res) {
    res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(decks));
});

router.get('/:id', async function (req, res) {
    var deckId = parseInt(req.params.id);
    res.header("Content-Type", 'application/json');
    // Get from JSON the deck with the id
    var deck = decks.find(deck => deck.id === deckId);
    return res.send(JSON.stringify(deck));
});

module.exports = router;