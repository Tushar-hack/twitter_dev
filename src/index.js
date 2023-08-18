import express from "express";
const app = express();
import bodyParser from "body-parser";
import passport from "passport";

import {connect} from './config/dbConfig.js';
import {PORT} from './config/config.js';
import v1ApiRoutes from './routes/index.js'; 
import {passportAuth} from './config/jwtConfig.js'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/v1', v1ApiRoutes);

app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    await connect();
});