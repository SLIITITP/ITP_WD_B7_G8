const express = require('express')
const {
    createMonthqty,
    getMonthqties,
    getMonthqty,
    deleteMonthqty,
    updateMonthqty
} = require('../controllers/monthqtyController')

const router = express.Router()


router.get('/', getMonthqties)

router.get('/:id', getMonthqty)

router.post('/', createMonthqty)

router.delete('/:id', deleteMonthqty)

router.patch('/:id', updateMonthqty)


module.exports = router