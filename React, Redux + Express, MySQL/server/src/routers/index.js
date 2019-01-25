const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('start: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send('home page');
});

router.use('/api', require('./api'));

module.exports = router;