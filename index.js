import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB  from './config/connectDB.js';
import productRoute from './routes/productRoutes.js';

// Calling data from dotenv
dotenv.config();

// Connect with database
connectDB();

// initial express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());



// Routes
// Root route
app.get('/', async(req, res)=>{
     res.send("Server is Running...");
});
app.use('/api/v1/products', productRoute);

// app.use('')
// Listing to port
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
console.log(`Server is Running on port ${port}`);
});
