import User from '../models/user.js';
import CRUDRepository from './CRUDRepository.js';

class UserRepository extends CRUDRepository {
    constructor () {
        super(User);
    }

    async findBy (data) {
        try {
            const user = await User.find(data);
            return user;
        } catch (error) {
            console.log('Something went wrong at user repository layer in findBy');
        }
    }
}

export default UserRepository;