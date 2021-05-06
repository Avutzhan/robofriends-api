import express from 'express';

const app = express();

import User from './users.js';

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(User);
});

app.listen(3001, () => console.log('Example app is listening on port 3000.'));