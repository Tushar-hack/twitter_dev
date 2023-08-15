import express from "express";
const router = express.Router();

import { createTweet} from '../../controller/tweetController.js';
import { toggleLike } from "../../controller/likeController.js";
import {createComment} from '../../controller/commentController.js';

router.post('/create' , createTweet);

router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment );

export default router;