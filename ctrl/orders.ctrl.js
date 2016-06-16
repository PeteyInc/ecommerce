var mongoose = require('mongoose');
var Order = require('../modules/orders.module.js');
var cartSchema = require('../modules/cart.module.js');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection.once('open', function () {
	console.log('connected to ecommerce mongoDB');
});

module.exports = {
  create: function(req, res, next) {

  },
  update: function(req, res, next) {

  },
  index: function(req, res, next) {

  },
  show: function(req, res, next) {

  }
};
