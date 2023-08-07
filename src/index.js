const express = require('express');
const app = express();

const connect = require('./config/dbConfig');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweetRepository');


const PORT = 3060;
app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
    // const tweet = await Tweet.create({
    //     content: "Second Tweet"
    // });
    // const tweet = await Tweet.find({userEmail: "tushar@gmail.com"});
    // const tweet = await Tweet.findById('64d118ec429eb9f99db80a01');
    // tweet.userEmail = 'tushar86@gmail.com';
    // tweet.save();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: 'Tweet with comment',
    //     userEmail: 'shubham@gmail.com'
    // });
    // tweet.comment.push({content: 'First comment on any tweet'});
    // await tweet.save();
    
    // const tweet = await tweetRepo.create({content: 'Tweet with comment Schema'});
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comment.push(comment);
    // await tweet.save();
    // console.log(tweet);
});