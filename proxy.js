const url = require('url');
const ProxyService = require('./service');

/**
 * @function
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
async function getPage(req, res) {
    try {
        let host;
        let allUrls;
        let pageData;

        allUrls = url.parse(req.url, true);
        host = allUrls.query.host;

        if (host) {
            pageData = await ProxyService.getGzipPageData(host);
            pageData = await ProxyService.addData(pageData);
            pageData = await ProxyService.returnGzipDataPage(pageData);

            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });
            res.write(pageData);
            res.end();
        }
    } catch (err) {
        res.write(err);
    }
}

module.exports = {
    getPage
};
