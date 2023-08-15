import express from "express";
const router = express.Router();

import { createTweet } from '../../controller/tweetController.js';
import { toggleLike } from "../../controller/likeController.js";

router.post('/create' , createTweet);

router.post('/likes/toggle', toggleLike);

export default router;