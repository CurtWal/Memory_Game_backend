express = require('express');
const score = require('../model/score');
const router = express.Router();

router.get('/score', async (req, res) => {
    const myScore = await score.find({});
    res.send(myScore);
});

module.exports = router;