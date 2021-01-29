const Joi = require('joi');

const messageSchema = Joi.object({
    email: Joi.string().email().required(),
    text: Joi.string().min(1).max(100).required()
});

module.exports = messageSchema;