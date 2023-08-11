import express from "express";

const router = express.Router();

import tweetRoutes from './v1/index.js';

router.use('/tweet', tweetRoutes);

export default router;