var express = require('express');
var router = express.Router();
var {MongoClient, ObjectId}= require('mongodb');
var client= new MongoClient("mongodb+srv://spr887011:Spr%4035708520@cluster0.dfyktwl.mongodb.net/?retryWrites=true&w=majority");

router.post('/', async(req, res) => {
    
    try {
        const { emailid, password } = await req.body;
        console.log(emailid)
        console.log(password)
        var connection= await client.connect();
        var db =  connection.db("FoodAppReact");
        var loginCredentials = await db.collection("UserRegistration").findOne({email:emailid});
        console.log(loginCredentials)
        if(loginCredentials == null){
          res.status(200).send("Invalid");
        }
        else{
          if(loginCredentials.password == password){
              res.status(200).send("True");
            }
          else{
            res.status(200).send("False");
          }
        }
        
        
        await connection.close();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

module.exports = router;
