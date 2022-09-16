const news = require('./tools/news')
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)
app.get('/news', (req, res) => {
    if (!req.query.subject) {
        return res.render('news', { title: 'you must provide subject' })
    }
    news(req.query.subject, ((error, data) => {
        if (error) {
            return res.render('news', {error})
        }
        res.render('news', { data })
    })
    )
})
app.listen(port, () => {
    console.log('Example app listening on port 3000')
})