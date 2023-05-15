const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { 
        type: String,
        // required: true ,
         unique : true,
        // maxlength:10
    },
    password: { 
        type:String,
        // required:true,
        unique:true,
        // minlength:0,
         maxlength:8
    },
    firstname: { 
        type: String,
        // required: true ,
        // minlength:0,
        // maxlength:20
    },
    lastname: { 
        type: String,
        // required: true ,
        // minlength:0,
        // maxlength:20
    },
    phoneNumber: { 
        type: Number,
        // required: true,
        // minlength:0,
         maxlength:10 
    },
    email: { 
        type: String,
        // required: true
    },
    
    address: {
        type: String,
        // required: true
    },
    NIC: { 
        type: Number,
        // required: true,
        // minlength:0,
        maxlength:12
    },
    userType: { 
        type: String,
    },
    
}, {
    timestamps: true,
});



const User = mongoose.model('User', userSchema);
module.exports = User;