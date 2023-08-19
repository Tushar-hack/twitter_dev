import mongoose, { mongo } from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        min: [250, 'Tweet cannot be more than 250 characters'],
        required: true
    },
    likes :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    image: {
        type: String
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;