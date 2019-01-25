const express = require('express');
const compresstion = require('compression');
const cors = require('compression');

const app = express();
const port = 5000;

app.use(compresstion());
app.use(express.json());
app.use(cors());

app.use('/', require('./routers'));

app.use((req, res, next) => {
    res.status(404).send('일치하는 주소가 없습니다!');
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Server error');
});

app.listen(port, () => {
    console.log('Start Server');
});