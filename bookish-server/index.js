require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2021;
const db = require('./config/mongoose');
const cors = require('cors');

//allowing cors
app.use(cors());

const User = require('./models/user');
app.get('/', async (req, res) => {
    res.json({
        "status": "working"
    });
});

app.get('/getmessage', (req, res)=>{
    res.send("working");
});

app.listen(port, (err)=>{
    if(err)
        console.log("Error occured on the server: ", err);
    else
        console.log("Server is up and running at port: ", port);
})