import UserService from '../../src/services/userService.js';
import UserRepository from '../../src/repository/userRepository.js';

jest.mock('../../src/repository/userRepository.js');

describe('User Service Tests', () => {
    test('signup test',async () => {
        const data = {
            email: 'q@g.com',
            password: '123',
            name: 'qer'
        };

        (UserRepository.prototype.create).mockImplementation(() => {
            return {...data, createdAt: '2023-08-24', updatedAt: '2023-08-24'};
        });

        const userService = new UserService();
        const user = await userService.signup(data);

        expect(user.email).toBe(data.email);
        expect(user.createdAt).toBeDefined();
    })
});