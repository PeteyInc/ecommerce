var mongoose = require('mongoose');

var Schema = mongoose.Schema;
module.exports = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
