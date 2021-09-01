var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incomeSchema = new Schema({
    source : [String],
    amount : Number,
    date:new Date(),
    incomeId : {type:Schema.Types.ObjectId,required:true,ref:'Users'}
})

module.exports = mongoose.model('Income',incomeSchema);