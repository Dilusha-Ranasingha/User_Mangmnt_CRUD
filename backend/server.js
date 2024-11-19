const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri  = 'mongodb+srv://dilusha:dilusha123@practizproject.8gtnf.mongodb.net/?retryWrites=true&w=majority&appName=practizProject';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected MongoDB!')
    }
    catch(error){
        console.log('Error connecting to MongoDB!', error);
    }
}

connect();

//creating a server
const port = 3001;
const host = 'localhost'; 
const server = app.listen(port, host, () => {
    console.log(`Server is listerning to ${server.address().port}`)
});

app.use('/api', router);
