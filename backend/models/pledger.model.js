const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pledgerSchema = new Schema({

    brand: {
        type: String,
        required: true,
        minlength: 1
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    reorderqty: {
        type: Number,
        required: true
    },

    reorderlvl: {
        type: Number,
        required: true
    },

    tdate: {
        type: Date,
        required: true
    },

    transaction: {
        type: String,
        required: true
    },

    iqty: {
        type: Number,
        required: true
    },

    ibalance: {
        type: Number,
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

module.exports = mongoose.model('Pledger', pledgerSchema);
