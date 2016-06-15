var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

var app = express();
var port = 5000;
var corsOptions = {
  origin: 'http://localhost:' + port
};

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors(corsOptions));

var productCtrl = require('./products.ctrl.js');

//Mongoose post
app.post('/api/products', productCtrl.create);
app.get('/api/products', productCtrl.index);
app.get('/api/products/:id', productCtrl.show);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete);

app.listen(port, function() {
  console.log("Listening to port", port);
});
