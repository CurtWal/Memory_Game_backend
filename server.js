"use strict";
require("dotenv").config();

const express = require('express');
const cors = require('cors');
const axios = require("axios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const getScore = require('./routes/getScore');
const postScore = require('./routes/postScore');
const scoreModel = require('./model/score');
const PORT = process.env.PORT || 3003;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MERNDB)
  .then(() => console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

app.get('/', (req,res) => {
    res.send('Welcome')
})

app.get('/get-pokemon', (req, res) => {
    let rand = Math.floor(Math.random() * 300) + 1;
    let URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${rand}.png`
    res.send(URL)
})


app.get('/get-pokeball', (req, res) => {
    let pokeball = ['poke-ball', 'master-ball','great-ball','premier-ball','timer-ball','beast-ball','heavy-ball','net-ball','dusk-ball']
    let newPokeball = pokeball[Math.floor(Math.random() * pokeball.length) + 1]
    
    let newUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${newPokeball}.png`;
    res.send(newUrl)
})

const scoreData = async (req, res) => {
      try {
        let score1 = new scoreModel({
          name: "CW",
          score: "25",
          cards: "10",
        });
        await score1.save();
    } catch (error) {
            console.log(error);
          }
    }
scoreData();


app.use(getScore);
app.use(postScore);

app.listen(PORT, () => console.log(`listening on ${PORT}`))
