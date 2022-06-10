const express = require('express');
const router = express.Router();
const decks = require('../decks.json')

router.get('/decks', async function (req, res) {
    //res.header("Content-Type", 'application/json');
    return res.send(JSON.stringify(decks));
});

module.exports = router;