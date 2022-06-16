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
    console.log(result)
    return res.status(result.status).send(result.send);
});

// Join game
router.put('/:id/join', async function (req, res) {
    var result = data.joinGame(req.params.id, req.body.username);
    return res.contentType('json')
        .cookie('uwu', 'uwu', {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: true,
            secure: true
        })
        .cookie('gameId', req.params.id)
        .cookie('username', req.body.username)
        .status(result.status)
        .send(result.send)

});

// Start game
router.put('/:id/start', async function (req, res) {
    var result = data.startGame(req.params.id);
    return res.status(result.status).send(result.send);
});

// Get users of game 
router.get('/:id/users', async function (req, res) {
    var users = data.getUsers(req.params.id);
    return res.status(200).send(JSON.stringify(users));
});
module.exports = router;