import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';

// Routes Import

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());

// Routes Declare 

app.use('/api/v1/users', userRouter)

export {app};