const {model,Schema} = require('mongoose');
const  User = new Schema({
   enable:[],
    name:String,
    login:String,
    password:String,
    admin:Boolean,

})
module.exports = model("user",User)