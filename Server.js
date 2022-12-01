/**
 * Reference: https://www.youtube.com/watch?v=PvMDWbAPPK4
 * 
 * 1. Install required dependencies to connect to mongoose database 
 * npm i express cors mongoose dotenv
 */

// 2. Import Dependencies to connect to mongoose database
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000

app.use(express.json());
app.use(cors());

// 3. connect to the database
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});

// 4. Test server: nodemon server 
