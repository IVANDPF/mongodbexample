const {MongoClient} = require("mongodb");
const config = require("../config");

const client = new MongoClient(config.mongoURI);
client.connect().then(()=> console.log("Nos conectamos a mongodb")).catch((err)=> console.log("No nos conectamos a mongodb", err.message))

module.exports = client;