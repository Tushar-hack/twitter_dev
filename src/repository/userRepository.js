import User from '../models/user.js';
import CRUDRepository from './CRUDRepository.js';

class UserRepository extends CRUDRepository {
    constructor () {
        super(User);
    }
}

export default UserRepository;