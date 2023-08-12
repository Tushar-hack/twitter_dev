import Like from '../models/like.js';
import CRUDRepository from './CRUDRepository.js';

class LikeRepository extends CRUDRepository {
    constructor () {
        super(Like);
    }
}

export default LikeRepository;