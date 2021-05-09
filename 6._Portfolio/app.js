const  express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contactRouter = require("./routes/contact.js");
const projectsRouter = require("./routes/projects.js");

app.use(contactRouter.router);
app.use(projectsRouter.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");


const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const skillspage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");
const educationpage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");



app.get("/", (req,res)=>{
    res.send(header + frontpage + footer)
});

app.get("/frontpage", (req,res)=>{
    res.send(header + frontpage + footer)
});

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skillspage + footer);
});
app.get("/education", (req, res) => {
    res.send(header + educationpage + footer);
});





const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on", server.address().port);
});