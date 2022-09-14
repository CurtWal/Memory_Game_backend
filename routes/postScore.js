express = require('express');
const score = require('../model/score');
const router = express.Router();

router.post('/new-score', async (req, res) => {
    try {
        const newScore = await score.create(req.body);
        res.send(newScore);
    } catch (error) {
        res.status(500).send('Error creating Score');
    }
});

module.exports = router;