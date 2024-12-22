const {Schema} = require('mongoose');
//const mongoose = require('mongoose');
const OrdersSchema =  new Schema(
    {
        name:String,
        qty:Number,
        price:Number,
        mode:String,
        //curr:Number
    }
)
module.exports = {OrdersSchema};