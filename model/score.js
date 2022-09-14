const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    score: {
        type: 'string',
    },
    cards: {
        type: 'string'
    }
});

const scoreModel = new mongoose.model("High Score", scoreSchema);

module.exports = scoreModel;