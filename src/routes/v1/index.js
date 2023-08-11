import express from "express";
const router = express.Router();

import { createTweet } from '../../controller/tweetController.js';

router.post('/create' , createTweet);

export default router;