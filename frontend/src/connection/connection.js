const axios = require('axios');

export const getDecks = async (user) => {
    let data;
    await axios
        .get("http://localhost:3001/decks")
        .then((response) => {

            data = response.data;
            console.log(response)
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
