var mongoose = require('mongoose');
var cartSchema = require('./cart.module.js');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: [cartSchema],
  date: new Date()
});

module.exports = mongoose.model("Order", orderSchema);
