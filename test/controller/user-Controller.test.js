import UserService from '../../src/services/userService.js';
import {createUser} from '../../src/controller/userController.js';
import {requestObj, responseObj} from '../Mocker-Helper.js'

jest.mock('../../src/services/userService.js');

describe('User Controller Tests', () => {
    test('create User test',async () => {
        const req = requestObj();
        const res = responseObj();

        const data = {
            email: 'w@e.com',
            password: '123',
            name: 'Tushar',
            createdAt: "2023-08-24",
            updatedAt: "2023-08-24"
        };

        (UserService.prototype.signup).mockReturnValue(data);
        await createUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
            data: data,
            message: 'Successfully created the user',
            success: true,
            err: {}
        });
    })
});