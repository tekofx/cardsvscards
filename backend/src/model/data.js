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

function getRandomCards(decksID) {
    // Get random cards from decks without repeating
    var cards = [];
    var cont = 0;
    while (cont < 7) {
        var deckID = decksID[Math.floor(Math.random() * decksID.length)];
        var deck = decksJSON.find(deck => deck.id === decksID[deckID]);
        var card = deck.cards.white[Math.floor(Math.random() * deck.cards.white.length)];
        if (!cards.includes(card)) {
            cards.push(card);
            cont++;
        }
    }

    return cards;
}

function createGame(decksIDs, username) {
    var gameId = games.length;

    // Select random cards from decks
    var cards = getRandomCards(decksIDs);

    user = { id: 0, owner: true, username: username, cards: cards };
    var game = {
        id: gameId,
        decks: decksIDs,
        users: [user],
    }
    games.push(game);
    return { "status": 200, "send": game };
}

function joinGame(gameId, username) {
    var game = getGame(gameId);
    var cards = getRandomCards(game.decks);
    var user = { id: game.users.length, owner: false, username: username, cards: cards };
    game.users.push(user);
    return { "status": 200, "send": game };
}

function startGame(gameId) {
    var game = getGame(gameId);
    // Disorder users
    game.users = game.users.sort(() => Math.random() - 0.5);
    return { "status": 200, "send": game };
}

module.exports = {
    getDecks,
    getDeck,
    getDeckBlackCards,
    getDeckWhiteCards,
    getGame,
    createGame,
    joinGame,
    startGame,
}
