const { HoldingsSchema } = require('../schemas/HoldingsSchema');
const mongoose = require('mongoose');
const holding = mongoose.model('holding', HoldingsSchema);
module.exports = {holding};
