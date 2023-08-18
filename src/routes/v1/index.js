import express from "express";
const router = express.Router();

import { createTweet, getTweet} from '../../controller/tweetController.js';
import { toggleLike } from "../../controller/likeController.js";
import {createComment} from '../../controller/commentController.js';
import { createUser , login} from '../../controller/userController.js'
import {authenticate} from '../../middleware/authentication.js';

router.post('/tweets' ,authenticate, createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',authenticate, toggleLike);

router.post('/comments',authenticate, createComment );

router.post('/signup' , createUser);

router.post('/signin', login);

export default router;