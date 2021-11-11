require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2021;
const db = require('./config/mongoose');
const cors = require('cors');

//allowing cors
app.use(cors());

//body-parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));





app.use('/', require('./routes/index'));
app.listen(port, (err)=>{
    if(err)
        console.log("Error occured on the server: ", err);
    else
        console.log("Server is up and running at port: ", port);
})