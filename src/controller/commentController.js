import CommentService from "../services/commentService.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const comment = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(200).json({
            data: comment,
            success: true,
            message: 'Successfully created the Comment',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong at comment Controller in create Comment',
            err: error
        });
    }   
}
