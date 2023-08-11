import express from "express";
const app = express();

import {connect} from './config/dbConfig.js';
import {PORT} from './config/config.js'; 


app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
});