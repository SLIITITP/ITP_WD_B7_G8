const router = require('express').Router();
let Review = require('../models/review.model');

router.route('/').get((req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const details = req.body.details;

  const newReview = new Review({
    details,
   
  });

  newReview.save()
  .then(() => res.json('New Customer review added to the system!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer review deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;