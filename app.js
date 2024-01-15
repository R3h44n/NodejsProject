// imports
const express = require('express')
const app = express()
const port = 3000

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

//Static Files
app.use(express.static('./public'))
app.use('/css', express.static(__dirname + './public/css'))
app.use('/images', express.static(__dirname + './public/images'))
app.use('/js', express.static(__dirname + './public/js'))

app.get('', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/dining', (req, res) => {
    res.render('dining')
})

app.get('/entertainment', (req, res) => {
    res.render('entertainment')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/shopping', (req, res) => {
    res.render('shopping')
})

// Listen on port 3000
app.listen(port, () => console.info('Server is listening on port 3000'))