var express = require('express');
var router = express.Router();
var {MongoClient, ObjectId}= require('mongodb');
var client= new MongoClient("mongodb+srv://spr887011:Spr%4035708520@cluster0.dfyktwl.mongodb.net/?retryWrites=true&w=majority");
/* GET users listing. */
router.get('/',async function(req, res, next) {
    try {
        var connection= await client.connect();
        var db = connection.db("FoodAppReact");
        var restaurantList = await db.collection("RestaurantDetails").find({}).toArray();
        res.json(restaurantList);
        await connection.close();
    } 
    catch (error) 
    {
     console.log(error)   
    }
});
router.get('/:id',async function(req, res, next) {
    try {
        var connection= await client.connect();
        var db =  connection.db("FoodAppReact");
        var foodItems = await db.collection("RestaurantDetails").findOne({_id:new ObjectId(req.params.id)});
        res.json(foodItems);
        await connection.close();
    } 
    catch (error)
    {
     console.log(error)   
    }
});
module.exports = router;
