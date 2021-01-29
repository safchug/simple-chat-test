require('dotenv/config');




const MongoClient = require('mongodb').MongoClient;

const uri = process.env.DB_URI;
const dbname = "simple-chat";

var db;

module.exports = async () => {
    if(db) {
        return db;
    }

    const client = await MongoClient.connect(uri)
    db = client.db(dbname);
    return db;
}