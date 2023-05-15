const express = require('express')
const {
    createPledger,
    getPledgers,
    getPledger,
    deletePledger,
    updatePledger
} = require('../controllers/pledgerController')

const router = express.Router()


router.get('/', getPledgers)

router.get('/:id', getPledger)

router.post('/', createPledger)

router.delete('/:id', deletePledger)

router.patch('/:id', updatePledger)


module.exports = router