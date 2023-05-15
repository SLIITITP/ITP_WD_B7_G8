const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phoneNumber = Number(req.body.phoneNumber);
  const email = req.body.email;
  const address = req.body. address;
  const NIC = Number(req.body.NIC);
  const userType=req.body.userType;

  
  const newUser = new User({
    username,
    password,
    firstname,
    lastname,
    phoneNumber,
    email,
    address,
    NIC,
    userType,
  });

  newUser.save()
  .then(() => res.json('New Customer added to the system!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username, password: password })
    .then(user => {
      if (user) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid username or password!' });
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.phoneNumber = Number(req.body.phoneNumber);
        user.email = req.body.email;
        user.address = req.body.address;

      user.save()
        .then(() => res.json('Customer details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
