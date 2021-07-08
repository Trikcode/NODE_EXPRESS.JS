
const http = require('http');
const { readFileSync } = require('fs');

const page = readFileSync('./navbar-app/index.html');
const style = readFileSync('./navbar-app/styles.css');
const logo = readFileSync('./navbar-app/logo.svg');
const browser = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(page);
        res.end();
    }

    //about
    else if (url === '/about')
    {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(page);
        res.end();
    }
        else if (url === '/styles.css')
    {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(style);
        res.end();
    }
        //image
        else if (url === '/logo.svg')
    {
        res.writeHead(200, { 'content-type': 'img/svg+xml' });
        res.write(logo);
        res.end();
    }
        //js
        else if (url === '/browser-app.js')
    {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(browser);
        res.end();
    }
        //not found
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page Not found</h1>')
        res.end()
        
    }
})
server.listen(3000);