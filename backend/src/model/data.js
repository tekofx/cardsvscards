const decks = require('../decks.json')
const games = require('../games.json')

/*              Decks              */
function getDecks() {
    return decks;
}

function getDeck(id) {
    return decks.find(deck => deck.id === id);
}

function getDeckBlackCards(deck) {
    return deck.cards.black;
}

function getDeckWhiteCards(deck) {
    return deck.cards.white;
}

/*          Games            */

function getGame(id) {
    return games.find(game => game.id === parseInt(id));
}

function createGame(game) {
    var gameId = games.length + 1;
    game.id = gameId;
    games.push(game);
    return game;
}

module.exports = {
    getDecks,
    getDeck,
    getDeckBlackCards,
    getDeckWhiteCards,
    getGame
}
