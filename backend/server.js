const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

require("dotenv").config();



const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());


const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const reviewsRouter = require('./routes/reviews');
app.use('/reviews', reviewsRouter);
const feedbacksRouter = require('./routes/feedbacks');
app.use('/feedbacks', feedbacksRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
