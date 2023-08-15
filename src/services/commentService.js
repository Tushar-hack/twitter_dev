import {CommentRepository, TweetRepository} from '../repository/index.js';

class CommentService {
    constructor () {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }


    async createComment (modelId, modelType, userId, content) {
        try {
            if(modelType == 'Tweet') {
                var commentable = await this.tweetRepository.get(modelId);
            }else if( modelType == 'Comment') {
                var commentable = await this.commentRepository.get(modelId);
            }else{
                throw new Error('Unknown Model Type.')
            }

            const comment = await this.commentRepository.create({
                content: content,
                onModel: modelType,
                commentable: modelId,
                userId: userId
            });
            await commentable.comments.push(comment.id);
            await commentable.save();

            return commentable;
        } catch (error) {
            console.log('Something went wrong at Comment Service in createComment');
        }
    }
}

export default CommentService;