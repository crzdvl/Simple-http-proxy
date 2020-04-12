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
            pageData = await ProxyService.getPageData(host);
            pageData = await ProxyService.addData(pageData);

            res.write(pageData);
        }
    } catch (error) {
        res.write(error);
    }
}

module.exports = {
    getPage
};
