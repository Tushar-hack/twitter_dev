import mongoose, { mongo } from "mongoose";

const likeSchema = new mongoose.Schema({
    OnModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'OnModel'
    },
    User: {
        type: String,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;