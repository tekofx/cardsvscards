const express = require('express');
const router = express.Router();
const games = require('../games.json')
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
    var result = data.createGame(req.body.decks, req.body.username);
    return res.status(result.status).send(result.send);
});

// Join game
router.put('/:id/join', async function (req, res) {
    var result = data.joinGame(req.params.id, req.body.username);
    return res.status(result.status).send(result.send);
});

// Start game
router.put('/:id/start', async function (req, res) {
    var result = data.startGame(req.params.id);
    return res.status(result.status).send(result.send);
});

module.exports = router;