import UserService from "../services/userService.js";

const userService = new UserService();

export const createUser = async (req, res) => {
    try {
        const user = await userService.signup(req.body);
        return res.status(201).json({
            data: user,
            message: 'Successfully created the user',
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong!!',
            err: error
        });
    }
}