 const express = require("express");
 const app = express();

 // const app = require(express)(): = it is the same way as above but in same line 

 app.get("/" , (req, res) => {
     // send an empty json as required
     res.send({});
});

 // create a route on the endpoint me which sends back a json that represents you
 app.get("/me", (req, res) =>{
     const me = {
       name:"Pragya Chudal"
     }
     res.send(me);
 });

//********************************************************************************************************************************* */
 //Lecture 4 :: CLASSWORK 

 // create a route called about that serves a hardcoded API version number in a string
 app.get("/about", (req, res)=>{
    res.send({
      version :"1.0.0"
    })

 });
 // a header tag that says welcome in page

 app.get("/page" , (req, res)=>{
   res.send("<h1> Welcome </h1>");
 });


 app.listen(8080);
