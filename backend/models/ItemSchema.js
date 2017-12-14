const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
  item_name:{
    type : String,
    required : true
  },
  item_done:{
    type:boolean
  }
});
const items = module.exports = mongoose.model('items',itemSchema);
