const express = require('express');
const path = require('path');
const app = express();

// use
app.use(express.static('./public'))
// server
app.listen(5000, () => {
    console.log('Server is listening on port 5000.... ');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

