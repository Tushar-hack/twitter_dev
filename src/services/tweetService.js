import {HashtagRepository, TweetRepository} from '../repository/index.js';

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }   

    async create (data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase());
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        console.log(alreadyPresentTags);
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]};
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get (id) {
        try {
            const tweets = await this.tweetRepository.getWithComments(id);
            return tweets;
        } catch (error) {
            console.log('Something went wrong at Tweet Service in get');
        }
    }
}

export default TweetService;