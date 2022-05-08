const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const productRoutes  = require('./routes/productRoute.js')
const userRoutes = require('./routes/userRoute')
dotenv.config()

connectDB()

const app = express()


app.get('/', (req,res) => {
    res.send('API is running........')
})

app.use(express.json());
app.use('/api/users',userRoutes)
app.use('/api/',productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on Port ${PORT}`))