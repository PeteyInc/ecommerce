var mongoose = require('mongoose');
var Product = require('../modules/products.module.js');
var cartSchema = require('../modules/cart.module.js');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection.once('open', function () {
	console.log('connected to ecommerce mongoDB');
});

module.exports = {
  create: function(req, res, next) {
    // var product = new Product(req.body);
    Product.create(req.body, function(err, result) {
      if (err) {
  			return res.status(500).json(err);
  		} else {
  			res.status(200).json(result);
  		}
    });
  },
  update: function(req, res, next) {
    if (!req.params.id) {
      return res.status(400).json('id query needed');
    }
    Product.update(req.params.id, req.body, function(err, response) {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.json(response);
      }
    });
  },
  index: function(req, res, next) {
    Product.find(req.query, function (err, response) {
      if (!err) res.status(200).json(response);
    });
  },
  show: function(req, res, next) {
    Product.findById(req.params.id, function (err, response) {
      if (!err) {
        console.log(req.params.id);
        res.status(200).json(response);
      }
    });
  },
  delete: function(req, res, next) {
    if (!req.params.id) {
      return res.status(400).json('id query needed');
    }
    Product.remove(req.params.id, function(err, response) {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.json(response);
      }
    });
  }
};
