const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs')
const ejsLayout = require('express-ejs-layouts')
//const ejsLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300

app.use(ejsLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})
app.listen(PORT, () => {
    console.log(`connected  ghug fregf here ${PORT}`)
})