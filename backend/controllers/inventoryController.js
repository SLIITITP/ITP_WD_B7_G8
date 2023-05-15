const Inventory = require('../models/inventory.model')
const mongoose = require('mongoose')

// get all inventories
const getInventories = async (req, res) => {
    const inventory = await Inventory.find({}).sort({createdAt: -1})

    res.status(200).json(inventory)
}

// get a single inventory
const getInventory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const inventory = await Inventory.findById(id)

    if(!inventory) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(inventory)
}

// create a new inventory item
const createInventory = async (req, res) =>{
    const {itemimg, itemid, brand, category, description, bcode} = req.body
    
    let emptyFields = []

    if(!itemimg) {
        emptyFields.push('item_image')
    }
    if(!itemid) {
        emptyFields.push('item_id')
    }
    if(!brand) {
        emptyFields.push('brand')
    }
    if(!category) {
        emptyFields.push('category')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!bcode) {
        emptyFields.push('barcode')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the the fields', emptyFields })
    }

    try{
        const inventory = await Inventory.create({itemimg, itemid, brand, category, description, bcode})
        res.status(200).json(inventory)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete inventory item
const deleteInventory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const inventory = await Inventory.findOneAndDelete({_id: id})

    if(!inventory) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(inventory)
}

// update inventory item
const updateInventory = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const inventory = await Inventory.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!inventory) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(inventory)
}


module.exports = {
    getInventories,
    getInventory,
    createInventory,
    deleteInventory,
    updateInventory
}