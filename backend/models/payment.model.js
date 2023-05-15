const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    fullname: { 
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    address:{
        type: String,
        required: true
    },

    city:{
        type:String,
        required: true
    },

    state:{
        type:String,
        required: true
    },

    zipcode:{
        type:Number,
        required: true
    },
    
    nameoncard:{
        type:String,
        required: true
    },

    numberoncard:{
        type:Number,
        required: true,
        unique: true,
        maxlength:16
    },

    expmonth:{
        type:String,
        required: true
    },

    expyear:{
        type:Number,
        required: true,
        maxlength: 04
    },

    cvv:{
        type:Number,
        required: true,
        maxlength:03,
        unique: true
    },
}, {
    timestamps: true,
});



const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;