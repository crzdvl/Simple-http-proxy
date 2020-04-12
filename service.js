let request = require('request');
let zlib = require('zlib');
const cheerio = require('cheerio');

/**
 * @method getPageData
 * @param {host}
 * @returns {any}
 */
function getGzipPageData(url) {
    return new Promise((resolve) => {
        request(url, { gzip: true }, (err, resp, body) => {
            resolve(body);
        });
    });
}

/**
 * @method addData
 * @param {pageData}
 * @returns {any}
 */
function addData(pageData) {
    const $ = cheerio.load(pageData);
    $('h1').text('Hello kittens!');

    return $.html();
}

/**
 * @method addData
 * @param {pageData}
 * @returns {any}
 */
function returnGzipDataPage(pageData) {
    return new Promise((resolve) => {
        zlib.gzip(pageData, (err, encoded) => {
            resolve(encoded);
        });
    });
}


module.exports = {
    getGzipPageData,
    addData,
    returnGzipDataPage
};
