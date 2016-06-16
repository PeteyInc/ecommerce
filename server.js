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

var productCtrl = require('./ctrl/products.ctrl.js');
var orderCtrl = require('./ctrl/orders.ctrl.js');

//Mongoose post
app.post('/api/products', productCtrl.create);
app.get('/api/products', productCtrl.index);
app.get('/api/products/:id', productCtrl.show);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete);

//Order
app.get('/api/order', orderCtrl.___);
app.post('/api/order', orderCtrl.___);

app.listen(port, function() {
  console.log("Listening to port", port);
});
