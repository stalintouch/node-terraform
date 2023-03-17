const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello Andrew');
});

app.listen(80);