const axios = require('axios');
const cheerio = require('cheerio');

/**
 * @method getPageData
 * @param {host}
 * @returns {any}
 */
function getPageData(host) {
    return axios.get(host).then((res) => {
        return res.data;
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

module.exports = {
    getPageData,
    addData
};
