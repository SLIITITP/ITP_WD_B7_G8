const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthqtySchema = new Schema({

    description: {
        type:String,
        required: true
    },
    year: {
        type:Number,
        required: true
    },

    jan: {
        type: Number,
        required: true
    },

    feb: {
        type: Number,
        required: true
    },

    march: {
        type: Number,
        required: true
    },

    apr: {
        type: Number,
        required: true
    },

    may: {
        type: Number,
        required: true
    },

    jun: {
        type: Number,
        required: true
    },

    jul: {
        type: Number,
        required: true
    },

    aug: {
        type: Number,
        required: true
    },

    sep: {
        type: Number,
        required: true
    },

    oct: {
        type: Number,
        required: true
    },

    nov: {
        type: Number,
        required: true
    },

    dec: {
        type: Number,
        required: true
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Monthqty', monthqtySchema);
