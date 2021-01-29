require('dotenv/config');

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const AUTH = process.env.DB_AUTH;

const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb://${USER}:${PASSWORD}@127.0.0.1:27017/?authSource=${AUTH}`;
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