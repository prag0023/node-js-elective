const express = require("express");
const app = express();

app.use(express.json());


// using json file 
const wine = require("./wine.json"); // it takes the path
// finish the above to get the json

// serve the wine
app.get("/wine", (req,res)=> {
    res.send()
});





// send back the query string
app.get("/search", (req ,res) => {
    console.log(req.query);
    res.send(req.query);
});
// create a route call telegram
app.get("/telegram/:message", (req, res)=>{
    res.send({message:req.params.message});
});

app.get("/message/:name", (req, res)=>{
    res.send({message:req.params.message, name:req.params.name});
});

// Post
// why is it undefined 
//
app.post("/good", (req, res ) => {
    console.log(req.body)
    res.send({body: req.body})
    
});

//app.listen takes a callback as the second argument which takes error as an argument.implement the call back

app.listen(3030, (error) => {
    if (error){
         console.log(error);
    }
    console.log("Server is running on port",3030);

});

//app.listen(3030);