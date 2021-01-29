const Joi = require('joi');

const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        const valid = error == null;
        if (valid) { next(); }
        else {
            const { details } = error;
            const message = details.map(i => i.message).join(',')
            res.status(400).json({ message })
        }
    }
}
module.exports = validation;