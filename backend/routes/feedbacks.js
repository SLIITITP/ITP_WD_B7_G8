const router = require('express').Router();
const Feedback = require('../models/feedback.model');
router.route('/').get((req, res) => {
  Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const feed = req.body.feed;

    const newFeedback = new Feedback({
      feed,
    })

    newFeedback.save()
      .then(() => res.json('New Customer feedback added to the system!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
  Feedback.findById(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer feedback deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
