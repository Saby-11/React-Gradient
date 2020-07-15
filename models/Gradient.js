const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradientSchema = new Schema({
    name:{
        type: String,
        default: 'unnamed',
    },
    downloads: {
        type: Number,
        default: 0,
    },
    colors: {
        start: String,
        end :String,
        direction: {
            type: String,
            default: "TO BOTTOM",
        },
    },
});

module.exports = mongoose.model("gradients", GradientSchema);