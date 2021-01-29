require('dotenv/config');
const app = require('./src/app');

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if(err) console.log(err);

    console.log(`The server is listenning on port ${PORT}`)
});