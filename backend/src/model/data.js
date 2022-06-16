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

function getRandomCards(decksID, cardType) {
    // Get random cards from decks without repeating
    var cards = [];
    var cont = 0;
    while (cont < 7) {
        var deckID = decksID[Math.floor(Math.random() * decksID.length)];
        var deck = decksJSON.find(deck => deck.id === decksID[deckID]);
        /* console.log(deck) */
        var whiteCards = deck.cards.filter(card => card.type === cardType);

        var card = whiteCards[Math.floor(Math.random() * whiteCards.length)];
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
    var whiteCards = getRandomCards(decksIDs, 'white');
    var blackCards = getRandomCards(decksIDs, 'black');

    user = { id: 0, owner: true, username: username, cards: whiteCards };
    var game = {
        id: gameId,
        decks: decksIDs,
        users: [user],
        blackCards: blackCards,
    }
    games.push(game);
    return { "status": 200, "send": game };
}

function joinGame(gameId, username) {
    var game = getGame(gameId);
    var cards = getRandomCards(game.decks, "white");
    var user = { id: game.users.length, owner: false, username: username, cards: cards };
    game.users.push(user);
    return { "status": 200, "send": game, "user": user };
}

function startGame(gameId) {
    var game = getGame(gameId);
    // Disorder users
    game.users = game.users.sort(() => Math.random() - 0.5);
    return { "status": 200, "send": game };
}

function getUsers(gameId) {
    var game = getGame(gameId);
    return game.users;
}

function getUser(gameId, userId) {
    var game = getGame(gameId);
    return game.users.find(user => user.id === userId);
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
    getUsers,
}
