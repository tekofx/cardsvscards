const express = require('express');
const router = express.Router();
const data = require('../model/data');
router.get('/', async function (req, res) {
    res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(data.getDecks()));
});

router.get('/:id', async function (req, res) {
    var deckId = parseInt(req.params.id);
    res.header("Content-Type", 'application/json');
    var deck = data.getDeck(deckId);
    return res.send(JSON.stringify(deck));
});

module.exports = router;