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

export {
    createTweet
}