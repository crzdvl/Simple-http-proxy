const http = require('http');
const httpProxy = require('http-proxy');
const Proxy = require('./proxy');

httpProxy.createProxyServer({ target: 'http://localhost:3000' }).listen(8000);

// eslint-disable-next-line func-names
http.createServer(async function (req, res) {
    await Proxy.getPage(req, res);

    res.end();
}).listen(3000);
