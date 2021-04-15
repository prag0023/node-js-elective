const express = require("express");
const app = express();

app.use(express.static('public'));

console.log(__dirname);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/node.html");
});

app.get("/intro", (req, res) => {
    res.sendFile(__dirname + "/public/introduction_and_setup.html");
});

app.get("/start", (req, res) => {
    res.sendFile(__dirname + "/public/getting_started.html");
});

app.get("/javascript", (req,res)=>{
    res.sendFile(__dirname + "/public/javascript_info.html");
});

app.get("/api", (req,res)=>{
    res.sendFile(__dirname + "/public/rest_api.html");
});
app.get("/env_variables", (req,res)=>{
    res.sendFile(__dirname + "/public/env_variables.html");
});
app.get("/api", (req,res)=>{
    res.sendFile(__dirname + "/public/crud_api.html");
});
app.get("/crud_api", (req,res)=>{
    res.sendFile(__dirname + "/public/crud_api.html");
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});