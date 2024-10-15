import cors from 'cors';
import express from 'express';
import mangooo from './database/db.js';
import Routes from './routes/userroutes.js';

mangooo()

const app = express();
app.use(express.json());
app.use(cors(


))


app.use('/api',Routes)

app.listen(4000,()=>{
    console.log('Server started at port 4000');
})