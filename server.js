var express = require('express');
// var mongoose= require('mongoose');
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

// mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/ecommerce');
// mongoose.connection.once('open', function () {
// 	console.log('connected to ecommerce mongoDB');
// });

// var Product = require('./products.module.js');
var productCtrl = require('./products.ctrl.js');

//Mongoose post
// app.post('/api/products', function(req, res, next) {
//   // var product = new Product(req.body);
//   Product.create(req.body, function(err, result) {
//     if (err) {
// 			return res.status(500).json(err);
// 		} else {
// 			res.status(200).json(result);
// 		}
//   });
// });
app.post('/api/products', productCtrl.create);
//
// app.get('/api/products', function(req, res, next) {
//   Product.find(req.query, function (err, response) {
//     if (!err) res.status(200).json(response);
//   });
// });
app.get('/api/products', productCtrl.index);
//
// app.get('/api/products/:id', function(req, res, next) {
//   Product.findById(req.params.id, function (err, response) {
//     if (!err) {
//       console.log(req.params.id);
//       res.status(200).json(response);
//     }
//   });
// });
app.get('/api/products/:id', productCtrl.show);

// app.put('/api/products/:id', function(req, res, next) {
//   if (!req.params.id) {
//     return res.status(400).json('id query needed');
//   }
//   Product.update(req.params.id, req.body, function(err, response) {
//     if (err) {
//       return res.status(500).json(err);
//     } else {
//       return res.json(response);
//     }
//   });
// });
app.put('/api/products/:id', productCtrl.update);

// app.delete('/api/products/:id', function(req, res, next) {
//   if (!req.params.id) {
//     return res.status(400).json('id query needed');
//   }
//   Product.remove(req.params.id, function(err, response) {
//     if (err) {
//       return res.status(500).json(err);
//     } else {
//       return res.json(response);
//     }
//   });
// });
app.delete('/api/products/:id', productCtrl.delete);

app.listen(port, function() {
  console.log("Listening to port", port);
});
