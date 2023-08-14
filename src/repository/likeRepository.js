import Like from '../models/like.js';
import CRUDRepository from './CRUDRepository.js';

class LikeRepository extends CRUDRepository {
    constructor () {
        super(Like);
    }

    async findByUserAndLikeable (data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log( error);
        }
    }
}

export default LikeRepository;