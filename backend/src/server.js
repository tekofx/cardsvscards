
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
app.use(cors());


const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);


app.use("/decks", require("./routes/decks"));
app.use("/games", require("./routes/games"));



console.log("Server Listening at http://localhost:" + port);