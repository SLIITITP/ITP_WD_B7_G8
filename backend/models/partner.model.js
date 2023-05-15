const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const partnerSchema = new Schema({

    firstName : {
        type : String,
        //required : true,
      },  
      
      lastName : {
        type : String,
        //required : true
      },
    
      nic : {
        type : String,
        //required : true,
        //unique : true
      },
    
      contactNo : {
        type : String,
        //required : true
      },

      gender : {
        type : String,
        //required : true
      },
    
      dateOfBirth : {
        type : String,
        //required : true
      },
    
      address : {
        type : String,
        //required : true
      },
    
      email : {
        type : String,
        //required : true,
      },

      userName : {
        type : String,
        //required : true
      }, 

      password : {
        type : String,
        
        //required : true
      },

      confirmPassword : {
        type : String,
        //required : true
      }
        
}, {
    timestamps: true,
});



const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;