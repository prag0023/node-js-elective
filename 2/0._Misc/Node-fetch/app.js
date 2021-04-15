const express = require("express");
const app = express();

app.use(express.static('public'));


const fetch = require('node-fetch');


    app.get("/proxy", (req,res)=>{ 
    fetch('https://www.google.com/')
    .then(response => response.text())
    .then(body => res.send(body))
});
        


const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});