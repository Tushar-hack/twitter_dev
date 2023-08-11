import Tweet from '../models/tweet.js';

class TweetRepository {
    async create (data) {
        try {
            const tweet =  await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get() {
        try {
            const tweet =  await Tweet.find().populate();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments (id) {
        try {
            const tweet =  await Tweet.findById(id).populate({path: 'Comment'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data) {
        try {
            const tweet =  await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const tweet =  await Tweet.findByIdAndRemove(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


}

export default TweetRepository;