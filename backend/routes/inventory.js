const express = require('express')
const {
    createInventory,
    getInventories,
    getInventory,
    deleteInventory,
    updateInventory
} = require('../controllers/inventoryController')

const router = express.Router()


//GET all Inventory Items
router.get('/', getInventories)

//GET a single Inventory Item
router.get('/:id', getInventory)

//POST a new Inventory Item
router.post('/', createInventory)

//DELETE an Inventory Item
router.delete('/:id', deleteInventory)

//UPDATE an Inventory Item
router.put('/:id', updateInventory)


module.exports = router