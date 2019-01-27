const http = require('http');

// Variables
const hostname = 'localhost';
const port = 3000;

// Create Server
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

// Listen to port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})