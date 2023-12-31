import Tweet from '../models/tweet.js';
import CRUDRepository from './CRUDRepository.js';

class TweetRepository extends CRUDRepository {

    constructor () {
        super(Tweet);
    }
    async getWithLikes(id) {
        try{
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        }catch (error) {
            console.log(error);
        }
    }

    async getWithComments (id) {
        try {
            const tweet =  await Tweet.findById(id).populate({path: 'comments', populate: {path: 'comments'}});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll (Offset, limit) {
        try {
            const tweet = await Tweet.find().skip(Offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getByCustom (data) {
        try {
            const tweet = await Tweet.find(data);
            return tweet;
        } catch (error) {
            console.log('Something went wrong at Repository Layer in getByCustom');
        }
    }
}

export default TweetRepository;