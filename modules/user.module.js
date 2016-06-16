var mongoose = require('mongoose');
var cartSchema = require('./cart.module.js');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  orders: { type: Schema.Types.ObjectId, ref: 'Order' },
  ZIP: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model("User", userSchema);
