const express = require('express')
const {
    createPricetrack,
    getPricetracks,
    getPricetrack,
    deletePricetrack,
    updatePricetrack
} = require('../controllers/pricetrackController')

const router = express.Router()

router.get('/', getPricetracks)

//GET a single Inventory Item
router.get('/:id', getPricetrack)

//POST a new Inventory Item
router.post('/', createPricetrack)

router.delete('/:id', deletePricetrack)

router.patch('/:id', updatePricetrack)


module.exports = router