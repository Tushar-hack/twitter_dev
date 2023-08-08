const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
const {PORT} = require('./config/config');

app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
});