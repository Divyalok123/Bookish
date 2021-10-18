const express = require('express');
const app = express();
const port = process.env.PORT || 2021;

app.get('/', (req, res) => {
    res.json({'status':'working'});
})

app.listen(port, (err)=>{
    if(err)
        console.log("Error occured on the server: ", err);
    else
        console.log("Server is up and running at port: ", port);
})