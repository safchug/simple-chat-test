const getDb = require('../models/index');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    async addMessage(message) {
        const db = await getDb();
        return db.collection('messages').insertOne(message);
    },

    async getMessageForPage(page, elementsPerPage = 10) {
        const db = await getDb();

        const skipIndex = page * elementsPerPage;

        return db.collection('messages').find().skip(skipIndex).limit(elementsPerPage).toArray();
    },

    async getSpesificMessage(id) {
        const db = await getDb();

        const objectId = new ObjectID(id);

        return db.collection('messages').findOne({_id: objectId});
    }
}