// import { holdingSchema } from "../schema/HoldingSchema";

const mongoose = require("mongoose");
//const {PositionsSchema} = require('../schemas/PostionsSchema.js')
const {PositionsSchema} = require("../schemas/PositionsSchema");
//const mongoose = require('mongoose');
//const mongoose = require('mongoose');
const position = mongoose.model('position',PositionsSchema);
module.exports = {position};
// const PositionsModel = mongoose.model('position',PositionsSchema);
// module.exports = { PositionsModel };