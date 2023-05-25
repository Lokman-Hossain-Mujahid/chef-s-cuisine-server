var express = require('express')
var cors = require('cors')
var chefs = require('./chefs.json')
var app = express()


app.use(cors())

app.get('/', function (req, res) {
  res.send('hello')
})

app.get('/chefs', function (req, res) {
  res.send(chefs)
})

app.listen(5000, function () {
  console.log('server running on port 5000')
})