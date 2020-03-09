const express = require('express');
const app = express();

app.use(express.static(__dirname));
const server = app.listen(3000,
    () => {
        console.log(`Server is listening on port: ${server.address().port}`)
    }
)
// [nodemon] starting `node server.js`
// Server is listening on port: 3000