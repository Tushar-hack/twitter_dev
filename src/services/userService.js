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
    async getUserByEmail (email, password) {
        try {
            console.log(email, password);
            const getUser = await this.UserRepository.findBy({email});
            const user = getUser[0];            
            if(!user) {
                throw new Error({
                    message: 'User does not exist',
                });
            }
            if(!user.comparePassword(password)){
                throw new Error({
                    message: 'Incorrect Password'
                });
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log('Something went wrong in service layer at login');
        }
    }
}

export default UserService;