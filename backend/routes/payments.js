const router = require('express').Router();
let Payment = require('../models/payment.model');

router.route('/').get((req, res) => {
  Payment.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode =  Number(req.body.zipcode);
  const nameoncard = req.body.nameoncard;
  const numberoncard = Number(req.body.numberoncard);
  const expmonth = req.body.expmonth;
  const expyear = Number(req.body.expyear);
  const cvv =  Number(req.body.cvv);

  const newPayment = new Payment({
    fullname,
    email,
    address,
    city,
    state,
    zipcode,
    nameoncard,
    numberoncard,
    expmonth,
    expyear,
    cvv,
  });

  newPayment.save()
  .then(() => res.json('New Payment added to the system!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Payment.findById(req.params.id)
    .then(payment => res.json(payment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Payment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Payment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Payment.findById(req.params.id)
    .then(payment => {
        payment.nameoncard = req.body.nameoncard;
        payment.numberoncard = Number(req.body.numberoncard);
        payment.expmonth = req.body.expmonth;
        payment.expyear = Number(req.body.expyear);
        payment.cvv = Number(req.body.cvv);

      payment.save()
        .then(() => res.json('Payment details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;