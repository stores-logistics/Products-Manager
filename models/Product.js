var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    storeId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);