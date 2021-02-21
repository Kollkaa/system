const {model,Schema} = require('mongoose');
const  System = new Schema({
   time:String,
    cpu:NaN,
    ram:NaN,
})
module.exports = model("system",System)