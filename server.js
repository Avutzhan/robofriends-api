const express = require('express');

const app = express();

let UsersJson = require('./users.js');

let users = UsersJson.users;

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(users);
});

app.listen(3001, () => console.log('Example app is listening on port 3000.'));