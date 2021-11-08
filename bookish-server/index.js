require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2021;
const db = require('./config/mongoose');

const User = require('./models/user');
app.get('/', async (req, res) => {
    try {
        await User.create({
            username: "dv"
        })
        console.log("User created");
    } catch(err) {
        console.log('Error in async function: ', err);
    }

    res.json({
        "yes": "no"
    })
})

app.listen(port, (err)=>{
    if(err)
        console.log("Error occured on the server: ", err);
    else
        console.log("Server is up and running at port: ", port);
})