const express = require('express');
const messagesRouter = require('./routes/messages');
const errorHandler = require('./midlewares/errorHandler');
const app = express();

app.use('/api', messagesRouter);
app.use(errorHandler);
module.exports = app;