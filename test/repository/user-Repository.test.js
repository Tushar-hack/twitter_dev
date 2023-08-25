import TweetRepository from '../../src/repository/tweetRepository.js';
import Tweet from '../../src/models/tweet.js';

jest.mock('../../src/models/tweet.js');

test('should create a new tweet and return it ', async () => {
    const data = {
        content: "New Content"
    }

    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        return {...data, createdAt: '2023-08-24', updatedAt: '2023-08-24'};
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data); 

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
}); 

test('should not create a tweet and throws an exception', async () => {

    const data = {
        content: "Testing create Tweet"
    }

    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        throw new Error('Something went wrong');
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch(err => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('Something went wrong');
    });

    expect(spy).toHaveBeenCalled();
});