
const express = require("express");
const app = express();

// consider what datatype to store your data in
// you are allowed to hardcode the id

const persons = [ 
    {
        "person1":{
            "id":"1",
            "firstName":"Marie",
            "lastName":"Curie",
            "email":"mar@gmail.com"
        },
    
        "person2":{
            "id":2,
            "firstName":"Mother",
            "lastName":"Teresa",
            "email":"mot@gmail.com"
        },
    
        "person3":{
            "id":3,
            "firstName":"Albert",
            "lastName":"Einstine",
            "email":"alb@gmail.com"
        }
    }


     
]

app.get("/persons", (req, res) => {
    res.send(persons);
    //res.send({ message: "First messgae" });
});

app.get("/persons/id", (req, res) => {
    const id = "";
    res.send(persons);
});

app.listen(4040);
