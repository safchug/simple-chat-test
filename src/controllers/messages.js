const messageService = require('../services/messages');

const getMessagesForPage = async (req, res, next) => {
    try {
        const {page} = req.params;
        const messages = await messageService.getMessageForPage(page);

        res.json(messages);

    } catch (err) {
        next(err);
    }
}

const getMessage = async (req, res, next) => {
    try {
        const {id} = req.params;

        const message = await messageService.getSpesificMessage(id);

        res.json({message});
    } catch (err) {
        next(err);
    }
}

const addMessage = async(req, res, next) => {
    try {
        const {email, text} = req.body;

        const creationDate = new Date();

        const result = await messageService.addMessage({email, text, creationDate});

        if(result.result.n !== 1) {
            throw new Error();
        }

        res.json('The massage has been added');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getMessagesForPage, getMessage, addMessage
}
