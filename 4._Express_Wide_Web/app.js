const express = require ("express");
const app = express();

console.log(__dirname);



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/welcome.html");

});

app.get("/candle", (req,res)=>{
    if (req.query.blow){
        res.send({lightsOn: false});
    }
    else{
        res.send({lightsOn: true});
    }

    
});


//console.log(process.env.PORT)

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});