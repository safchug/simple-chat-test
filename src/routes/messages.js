const router = require('express').Router();
const bodyParser = require('body-parser');

const messagesController = require('../controllers/messages');
const validation = require("../midlewares/validation");
const messageSchema = require("../schemas/message");

router.get('/messages/list/:page', messagesController.getMessagesForPage);

router.get('/messages/single/:id', messagesController.getMessage);

router.post('/add/message',
    bodyParser.json(), bodyParser.urlencoded({extended: true}),
    validation(messageSchema), messagesController.addMessage);

module.exports = router;

