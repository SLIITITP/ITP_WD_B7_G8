const Pledger = require('../models/pledger.model')
const mongoose = require('mongoose')

// get all ledger data
const getPledgers = async (req, res) => {
    const pledger = await Pledger.find({}).sort({createdAt: -1})

    res.status(200).json(pledger)
}

// get a single ledger for each product
const getPledger = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pledger = await Pledger.findById(id)

    if(!pledger) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pledger)
}

// create a new transaction for ledger
const createPledger = async (req, res) =>{
    const {brand, description, location, reorderqty, reorderlvl, tdate, transaction, iqty, ibalance, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec, costp, marginp, sellingp} = req.body
    
    try{
        const pledger = await Pledger.create({brand, description, location, reorderqty, reorderlvl, tdate, transaction, iqty, ibalance, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec, costp, marginp, sellingp})
        res.status(200).json(pledger)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete ledger
const deletePledger = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pledger = await Pledger.findOneAndDelete({_id: id})

    if(!pledger) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pledger)
}

// update ledger
const updatePledger = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const pledger = await Pledger.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!pledger) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(pledger)
}

module.exports = {
    getPledgers,
    getPledger,
    createPledger,
    deletePledger,
    updatePledger
}