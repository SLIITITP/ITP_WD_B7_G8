const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pricetrackSchema = new Schema({

    costp: {
        type: Number,
        required: true
    },

    marginp: {
        type: Number,
        required: true
    },

    sellingp: {
        type: Number,
        required: true
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Pricetrack', pricetrackSchema);
