const express = require ("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/project", (req, res) => {
    res.sendFile(__dirname + "/public/project/project.html");
});



const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port",Number(port));
});