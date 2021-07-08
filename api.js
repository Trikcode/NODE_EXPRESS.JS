const express = require('express');
const app = express();
let {people} = require('./data')


app.use(express.static('./methods-public'));
app.listen(5000,() => {
    console.log('port is listening on port 5000...');
})


app.post('/login', (req, res) => {
    res.send("POST")
})