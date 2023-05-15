const router = require('express').Router();
let Partner = require('../models/partner.model');

router.route('/').get((req, res) => {
  Partner.find()
    .then(partners => res.json(partners))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nic = req.body.nic;
    const contactNo = req.body.contactNo;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;
    const address = req.body.address;
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const newPartner = new Partner({

        firstName,
        lastName,
        nic,
        contactNo,
        gender,
        dateOfBirth,
        address,
        email,
        userName,
        password,
        confirmPassword,

  });

  newPartner.save()
  .then(() => res.json('New Partner added to the system!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Partner.findById(req.params.id)
    .then(partner => res.json(partner))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Partner.findByIdAndDelete(req.params.id)
    .then(() => res.json('Partner deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Partner.findById(req.params.id)
    .then(partner => {

        partner.firstName = req.body.firstName;
        partner.lastName = req.body.lastName;
        partner.nic = req.body.nic;
        partner.contactNo = req.body.contactNo;
        partner.gender = req.body.gender;
        partner.dateOfBirth = req.body.dateOfBirth;
        partner.address = req.body.address;
        partner.email = req.body.email;
        partner.userName = req.body.userName;
        partner.password = req.body.password;
        partner.confirmPassword = req.body.confirmPassword;

      partner.save()
        .then(() => res.json('Partner details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;