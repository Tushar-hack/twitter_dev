import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        min: [250, 'Tweet cannot be more than 250 characters'],
        required: true
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;