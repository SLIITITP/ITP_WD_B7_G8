const Pricetrack = require('../models/pricetrack.model')
const mongoose = require('mongoose')

// get all prices
const getPricetracks = async (req, res) => {
    const pricetrack = await Pricetrack.find({}).sort({createdAt: -1})

    res.status(200).json(pricetrack)
}

// get all prices for each
const getPricetrack = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pricetrack = await Pricetrack.findById(id)

    if(!pricetrack) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pricetrack)
}

// create new prices
const createPricetrack = async (req, res) =>{
    const {costp, marginp, sellingp} = req.body
    
    try{
        const pricetrack = await Pricetrack.create({costp, marginp, sellingp})
        res.status(200).json(pricetrack)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete prices
const deletePricetrack = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pricetrack = await Pricetrack.findOneAndDelete({_id: id})

    if(!pricetrack) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pricetrack)
}

// update prices
const updatePricetrack = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pricetrack = await Pricetrack.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!pricetrack) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pricetrack)
}

module.exports = {
    getPricetracks,
    getPricetrack,
    createPricetrack,
    deletePricetrack,
    updatePricetrack
}