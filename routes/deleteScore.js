const express = require('express');
const router = express.Router();
const Score = require('../model/score');

router.delete('/delete-score',  async (req, res) => {
    try {
         await Score.deleteMany();
         console.log('Deleted score');

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;