import express from "express";
const app = express();
import bodyParser from "body-parser";

import {connect} from './config/dbConfig.js';
import {PORT} from './config/config.js';
import v1ApiRoutes from './routes/index.js'; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1', v1ApiRoutes);

app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
});