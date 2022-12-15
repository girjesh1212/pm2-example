const express = require('express');

// initialize server
const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: 'Response from pm2 server' });
})

const port = 3000;

app.listen(port, function () {
    console.log("Server running on port " + port);
});