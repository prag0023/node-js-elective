const express = require("express");
const app = express();

app.use(express.json());

let animeNames = [
 {
     id :1,
     title: "Attack on Titan",
     weirdness: 6.8
 },
{
     id:2,
     title:"One Punch Man",
     protagonist:"Saitama"
 }
];

 app.get("/animeNames", (req,res) => {
     res.send({data : animeNames});
 });

 app.get("/animeNames/:id" , (req,res) =>{
     const animeNameId = Number(req.params.id);
     const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId)
     res.send({data: foundAnimeName});
 });

 app.post("/anime_names",(req,res) =>{
     const newAnimeName = req.body;
     newAnimeName.id = AUTOINCREMENT++;
     animeNames.push(newAnimeName);
     res.send({data: newAnimeName});
    });

    
    app.patch("/anime_names/:id", (req,res) => {
        animeNames = animeNames.map(animeName => {
            if (animeName.id === Number(req.params.id)) {
                return{ ...animeName, ...req.body, id: animeName.id };
            }
            return animeName;
        });   
        res.send({data :wasUpdated });
    });

 app.delete("//anime_names/:id" ,(req,res ) => {
     animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
     
     res.send({data : animeNames});
 });

app.listen(5000,(error) => {​​
    if (error) {​​
        console.log(error); 
    }​ ​
     console.log("Server started on port", 5000);
}​​); 