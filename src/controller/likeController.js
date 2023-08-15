import LikeService from '../services/likeService.js';

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        console.log(req.query.modelId);
        console.log(req.query.modelType);
        console.log(req.body.userId);
        const like = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            data: like,
            success: true,
            message: 'Successfully toggle the like',
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong',
            err: error
        });
    }
}