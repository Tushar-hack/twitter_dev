import TweetService from '../services/tweetService.js';

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            data: tweet,
            success: true,
            message: 'Successfully created!!',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong!!',
            err: error
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const tweets = await tweetService.get(req.params.id);
        return res.status(201).json({
            data: tweets,
            success: true,
            message: 'Successfully fetched the tweets',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong in tweet Controller in getTweet',
            err: error
        });
    }
}

export {
    createTweet,
    getTweet
}