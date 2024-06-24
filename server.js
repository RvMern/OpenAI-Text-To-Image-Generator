// ! Loading Required Functionalities
import express from 'express';
const app = express();

import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config();

// ! Database Connection Call
import dbConnect from '../OpenAI Text To Image Converter/Config/dbConnect.js';
dbConnect();

// ! Routers
import userRouter from '../OpenAI Text To Image Converter/Routes/userRoute.js';
import openAIRouter from '../OpenAI Text To Image Converter/Routes/openAIRoute.js'
import errorHandlerMiddleware from '../OpenAI Text To Image Converter/Middlewares/errorHandlerMiddleware.js';



// ! Middlewares
app.use(cors({
    origin:['http://localhost:5173']
}))
app.use(express.json());


// ! Routers
app.use('/api/v1/user',userRouter)
app.use('/api/v1/openai',openAIRouter)



// ! Error Handler
app.use(errorHandlerMiddleware);




// ! Creating Server Using Express
app.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log(`Server has been running successfully on PORT:${process.env.PORT}`);
});