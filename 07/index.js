const http = require('http');
const PORT = 5000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(`<h1>I am Happy To learn full stack webdevelopment from pw skills!'</h1>`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Sever is running on the ${PORT} port`);
});