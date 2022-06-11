const decksJSON = require('../decks.json')
const games = require('../games.json')

/*              Decks              */
function getDecks() {
    return decksJSON;
}

function getDeck(id) {
    return decksJSON.find(deck => deck.id === id);
}

function getDeckBlackCards(deckID) {
    var deck = decksJSON.find(deck => deck.id === deckID);
    return deck.cards.black;
}

function getDeckWhiteCards(deckID) {
    var deck = decksJSON.find(deck => deck.id === deckID);
    return deck.cards.white;
}

/*          Games            */

function getGame(id) {
    return games.find(game => game.id === parseInt(id));
}

function createGame(decks, username) {
    var gameId = games.length;

    // Select random cards from decks
    var cards = [];
    for (var i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * decks.length);
        var deckId = decks[random];
        var deck = decksJSON.find(deck => deck.id === deckId);
        var card = deck.cards.white[Math.floor(Math.random() * deck.cards.white.length)];
        cards.push(card);
    }

    user = { id: 0, owner: true, username: username, cards: cards };
    var game = {
        id: gameId,
        decks: decks,
        users: [user],
    }
    games.push(game);
    return { "status": 200, "send": game };
}

module.exports = {
    getDecks,
    getDeck,
    getDeckBlackCards,
    getDeckWhiteCards,
    getGame,
    createGame
}
