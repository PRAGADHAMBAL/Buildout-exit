import 'dotenv/config';7.6k (gzipped:3.2k)
import express from 'express';
import cors from 'cors'; 5k (gzipped :2.1 k)
import dbconnection from './helpers/dbconnect.js';
import {authRoutes,userRoutes,songRoutes} from './src/rputes/index.js';
import authenticate from './middleware/authenticate.js';
try{
    await dbConnection;
    const app=express();
    const port=process.env.PORT;
    }

app.use(cors())
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use(authenticate);
app.use('/api/user',userRoutes);
app.use('/api/song,songRoutes);
app.get('/',(req,res)=> {
    res.send('Hello World');

})

