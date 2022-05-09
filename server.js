const express = require("express");
const client = require("./database/dbconection");
const app = express();

app.use(express.json());

app.get("/", async(req,res)=> {
    const users = await client.db("codingdojo").collection("users").find().toArray()
    console.log(users);
    res.json(users);
});

app.post("/createuser", async(req,res)=> {
    const data = req.body
    try{
        await client.db("codingdojo").collection("users").insertOne(data)

        res.json({message: "User created"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Error"})

    }
});
    

app.listen(8000, ()=> (console.log("el servidor se encuentra levantado en el puerto 8000")));