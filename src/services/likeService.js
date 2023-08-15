import { LikeRepository , TweetRepository} from '../repository/index.js';

class LikeService {
    constructor () {
        this.LikeRepository = new LikeRepository();
        this.TweetRepository = new TweetRepository();
    }

    async toggleLike (modelId, modelType, userId) {
        if(modelType == 'Tweet') {
            var likeable = await this.TweetRepository.get(modelId);
        }else if(modelType == 'Comment') {
            // To Do
        }else{
            throw console.error('Something wrong');
        }
        const exist = await this.LikeRepository.findByUserAndLikeable({
            onModel: modelType,
            likeable: modelId,
            user: userId
        });
        if(exist) {
            likeable.likes.pull(exist.id);
            await likeable.save();
            await this.LikeRepository.destroy(exist.id);
            var isRemoved = true;
        }else {
            const newLike = await this.LikeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike.id);
            await likeable.save();
            isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;