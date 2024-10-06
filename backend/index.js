const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
app.use(express.json());
const cors = require('cors')
app.use(cors());
const { connection } = require('mongoose');
const userRouter = require('./Routes/authRoutes');
const movierouter = require('./Routes/movieRoutes');
app.use('/user', userRouter)
app.use('/movie', movierouter)









app.listen(process.env.PORT || 3005, async ()=>{
    try {
        await connection
        console.log(`Your Port runing on${process.env.PORT || 3005}`)
    } catch (error) {
        console.log(error)
    }
})