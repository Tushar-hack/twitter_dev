import express from "express";

const router = express.Router();

import tweetRoutes from './v1/index.js';

router.use('/twitter', tweetRoutes);

export default router;