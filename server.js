const http = require('http');
const httpProxy = require('http-proxy');
const Proxy = require('./proxy');

httpProxy.createProxyServer({ target: 'http://localhost:3000' }).listen(8000);

http.createServer((req, res) => {
    Proxy.getPage(req, res);
}).listen(3000);
