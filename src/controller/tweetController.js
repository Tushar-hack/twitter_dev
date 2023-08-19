import TweetService from '../services/tweetService.js';
import upload from '../config/file-upload-s3-config.js';

const tweetService = new TweetService();

const singleUploader = upload.single('image');

const createTweet = async (req, res) => {
    try {
        
        singleUploader(req, res, async function (err, data) {
            if(err) {
                return res.status(500).json({error: err});
            }
            const payload = {...req.body};
            payload.image = req.file.location;
            const tweet = await tweetService.create(payload);
            return res.status(201).json({
                data: tweet,
                success: true,
                message: 'Successfully created!!',
                err: {}
            });
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

const getTweetByUser = async (req, res) => {
    try {
        const tweets = await tweetService.getAllTweets(req.user.id);
        return res.status(200).json({
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
    getTweet,
    getTweetByUser
}