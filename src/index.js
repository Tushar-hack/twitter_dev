const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
const {PORT} = require('./config/config'); 

const tweetService = require('./services/tweetService');

app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
    const repo = new tweetService();
    const first = await repo.create({
        content: 'This is my #first tweet #excited'
    });
    console.log(first);
});