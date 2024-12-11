let uc = require('upper-case');
let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);