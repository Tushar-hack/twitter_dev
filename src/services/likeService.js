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
        console.log(likeable);
        const exist = await this.LikeRepository.findByUserAndLikeable({
            onModel: modelType,
            likeable: modelId,
            user: userId
        });
        if(exist) {
            likeable[0].likes.pull(exist.id);
            await likeable[0].save();
            await this.LikeRepository.destroy(exist.id);
            var isRemoved = true;
        }else {
            const newLike = await this.LikeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable[0].likes.push(newLike.id);
            await likeable[0].save();
            isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;