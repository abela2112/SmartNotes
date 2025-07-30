import express from 'express'
import dotconfig from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
dotconfig.config();

const app=express()

const PORT = process.env.PORT;
// import the routes module
import router from './routes/index.js';
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})