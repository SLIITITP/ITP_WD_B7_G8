const mongoose = require('mongoose');
/*const sequencing = require("../config/sequencing");

const autoIncrement = require('mongoose-sequence')(mongoose);*/

const Schema = mongoose.Schema;
const feedbackSchema = new Schema({
    
   // _id: Number,
    feed: { 
        type: String,
        required: true ,
    } 
    
}, 
   // {_id:false}
);
//feedbackSchema.plugin(autoIncrement);
/*feedbackSchema.pre("save", function (next) {
       let doc = this;
      sequencing.getSequenceNextValue("user_id").
      then(counter => {
        console.log("asdasd", counter);
       if(!counter) {
           sequencing.insertCounter("user_id")
            .then(counter => {
                doc._id = counter;
                    console.log(doc)
                     next();
                })
                .catch(error => next(error))
           } else {
                doc._id = counter;
               next();
            }
        })
        .catch(error => next(error))
     });*/

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

