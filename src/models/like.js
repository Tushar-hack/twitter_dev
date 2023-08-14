import mongoose, { mongo } from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'OnModel'
    },
    user: {
        type: String,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;