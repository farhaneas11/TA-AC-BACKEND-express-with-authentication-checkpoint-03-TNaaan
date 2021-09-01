var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    category:[String],
    amount:Number,
    date:new Date(),
    expenseId:{type:Schema.Types.objectId, required:true ,ref:'User'}
},{timestamps:true});

module.exports = mongoose.model('Expense',expenseSchema);