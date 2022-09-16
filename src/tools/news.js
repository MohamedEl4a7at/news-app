const request = require('request')
const news = (subject, callback) => {
    const url = `https://newsapi.org/v2/everything?q=${subject}&from=2022-08-16&sortBy=publishedAt&apiKey=f336e10c89ca4e1eaceb2dfe84ef07a1`
    request({ url, json: true, headers: { "User-Agent": "Windows11" } }, (error, response) => {
        if (error) {
            callback('Unable to connect location service', undefined)
        }
        else if (response.body.message) {
            callback(response.body.message, undefined)
        } else {
            callback(undefined, response.body.articles)
        }
    })
}
module.exports = news