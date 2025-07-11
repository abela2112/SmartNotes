import express from 'express'
import dotconfig from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
const PORT=process.env.PORT || 5000
const app=express()
dotconfig.config()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})