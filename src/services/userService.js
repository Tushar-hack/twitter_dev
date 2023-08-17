import {UserRepository} from '../repository/index.js'

class UserService {
    constructor () {
        this.UserRepository = new UserRepository();
    }
    async signup (data) {
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer at signup');
        }
    }
}

export default UserService;