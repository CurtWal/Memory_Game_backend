"use strict";
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require("axios");
const PORT = process.env.PORT || 3003;
const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.send('Welcome')
})

app.get('/get-pokemon', (req, res) => {
    let rand = Math.floor(Math.random() * 300) + 1;
    let API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${rand}.png`
    res.send(API)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))
