const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ message: 'api rest' }));

module.exports = app;
