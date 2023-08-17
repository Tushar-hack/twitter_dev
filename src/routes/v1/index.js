import express from "express";
const router = express.Router();

import { createTweet, getTweet} from '../../controller/tweetController.js';
import { toggleLike } from "../../controller/likeController.js";
import {createComment} from '../../controller/commentController.js';
import { createUser } from '../../controller/userController.js'

router.post('/create' , createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment );

router.post('/signup' , createUser);

export default router;