const axios = require('axios');

export const getDecks = async (user) => {
    let data;
    await axios
        .get("http://localhost:3001/decks")
        .then((response) => {

            data = response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
            data = null;
        });
    return data;
};

export const createGame = async (username, decks) => {
    let data;
    await axios
        .post("http://localhost:3001/games", {
            username: username,
            decks: decks
        })
        .then((response) => {
            data = response.data;
        }
        )
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
            data = null;
        }
        );

    return data;
}

export const joinGame = async (gameId, username) => {
    let data;
    gameId = String(gameId);
    await axios
        .post("http://localhost:3001/games/:" + gameId + "/join", {
            username: username
        })
        .then((response) => {
            data = response.data;
        }
        )
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
            data = null;
        }
        );

    return data;
}
