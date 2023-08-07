const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1/twitter_dev');
    console.log("Connection successful...");
};

module.exports = connect;