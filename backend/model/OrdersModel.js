const {model} = require("mongoose");
const mongoose = require('mongoose');
const {OrdersSchema} = require('../schema/OrdersSchema');
const OrdersModel =mongoose.model("order",OrdersSchema);
module.exports = {OrdersModel};