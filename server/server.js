import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';


const app = express();
await connectDB();

//Midlewares
app.use(cors())
app.use(express.json());

//Routes
app.get('/', (req, res)=> res.send('API is working'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})


