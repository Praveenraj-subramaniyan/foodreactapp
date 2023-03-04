var express = require('express');
var router = express.Router();
var {MongoClient, ObjectId}= require('mongodb');
var client= new MongoClient("mongodb+srv://spr887011:Spr%4035708520@cluster0.dfyktwl.mongodb.net/?retryWrites=true&w=majority");

router.post('/', async(req, res) => {
    
    try {
        const { emailid, password ,confirmpassword} = await req.body;
        var connection= await client.connect();
        var db =  connection.db("FoodAppReact");
        var registerCredentials = await db.collection("UserRegistration").findOne({email:emailid});
        console.log(registerCredentials)
        if(registerCredentials == null)
        {
          res.status(200).send("True");
          try
          {
            const result = await  db.collection("UserRegistration").insertOne({ email: emailid, password: password } );
         
          } 
          catch (error) 
          {
            console.log("mongo" +error)
            res.status(200).send("Error");
          }
        }
        else
        {
            res.status(200).send("False");
        }
        await connection.close();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

module.exports = router;
