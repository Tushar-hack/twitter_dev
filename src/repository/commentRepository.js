import Comment from '../models/comment.js';
import CRUDRepository from './CRUDRepository.js';
class CommentRepository extends CRUDRepository {
    constructor () {
        super(Comment);
    }
}

export default CommentRepository;