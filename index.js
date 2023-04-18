const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors({}));
app.use(express.json());

// Get the environment variables from the .env file
require("dotenv").config();

// Import the auth routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Import the account routes
const accountRoutes = require("./routes/account");
app.use("/account", accountRoutes);

// Import the game routes
const gameRoutes = require("./routes/game");
app.use("/game", gameRoutes);

// Import the square routes
const squareRoutes = require("./routes/square");
app.use("/square", squareRoutes);

// Import the card routes
const cardRoutes = require("./routes/card");
app.use("/card", cardRoutes);

// Obtenir el port del fitxer .env
const port = process.env.SERVER_PORT;

// Comença a escoltar al port previament configurat
app.listen(port, () => {
  console.log(`Authorization Server running on ${port}...`);
});