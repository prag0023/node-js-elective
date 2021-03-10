const express = require("express");
const app = express();

app.use(express.json());

const users = [
    {
      id: '1',
      username: 'Robin Wood',
    },
     {
      id: '2',
      username: 'Dave Davids',
    },
]


  // GET METHOD

  app.get('/users', (req, res) => {
    res.send(users); // 
  });
  
  app.get('/users/:userId', (req, res) => {
     res.send(users[req.params.userId]);
  });
  //**********************'***************************************************************************** */

  // POST METHOD

  app.post("/users", (req,res) => {
    const user = {
      id:users.length + 1,
      username :req.body.username
    }
    users.push(user);
    res.send(user);

  });  
  /********************************************************************************************************** */

  // DELETE METHOD

  app.delete("/users/:userId" , (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('We dont have the user with this id');

    const index = users.indexOf(user);
    users.splice(index, 1, 2);
    res.send(user);
});

/********************************************************************************************************************/

//PUT METHOD 
 app.put("/users/:userId", (req , res)=> {
   const user = users.find(u => u.id ===parseInt(req.params.id));
   if(!user) return res.status(404).send('We dont have the user with this id');

   user.username = req.body.username;

   res.send(user);

  });


  
app.listen(5000);