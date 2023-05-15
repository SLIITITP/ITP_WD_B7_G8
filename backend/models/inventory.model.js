const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    itemimg: {
        type: String,
        required: true,
    },

    itemid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    brand: {
        type: String,
        required: true,
        minlength: 1
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    bcode: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Inventory', inventorySchema);
