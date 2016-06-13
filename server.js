var express = require('express');
var mongojs = require('mongojs');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var corsOptions = {
  origin: 'http://localhost:' + port
};

var db = mongojs('ecommerce');
var prodColl = db.collection('products');

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors(corsOptions));
// app.use(express.static(__dirname + './public'));


// `POST /api/products`
// `GET /api/products`
// `GET /api/products/:id`
// `PUT /api/products/:id`
// `DELETE /api/products/:id`

app.listen(port, function() {
  console.log("Listening to port", port);
});
