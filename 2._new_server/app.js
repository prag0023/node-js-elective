
const express = require("express");
const app = express();


// gets the date with year :month :date 

app.get("/date", (req, res) => {
     let today = new Date();
     let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     //let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     res.send(date);

});


//gets the time with hour :minute: second
app.get("/time", (req, res)=> {
     let today= new Date();
     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     res.send(time);

});


// gets the month
app.get("/month", (req, res)=> {
    let today = new Date();
    let month = today.toLocaleString('default', { month: 'long' });
    res.send(month);
});

app.get("/day", (req, res)=> {
    let  today  = new Date();
    let day = today.toLocalString('default', {day : 'numeric'});
    res.send(day);
});


app.listen(3030);