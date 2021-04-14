import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import BodyParser from 'body-parser';
import dashboardRoute from './routers/dashboard.js';

const app = express();

app.use(BodyParser.json());
app.use(cors());
app.use('/',dashboardRoute);

const MONGO_URI="mongodb+srv://pverma42:prathamverma26142@cluster1.mkm8i.mongodb.net/test";
const PORT = 5000;

mongoose.connect(MONGO_URI,{
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true})
.then(app.listen(PORT),console.log(`Server started running at PORT ${PORT}`))
.catch((error)=>{console.log(error.message);});
