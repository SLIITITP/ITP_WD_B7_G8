const Monthqty = require('../models/monthqty.model')
const mongoose = require('mongoose')

// get all monthly quantities for all years
const getMonthqties = async (req, res) => {
    const monthqty = await Monthqty.find({}).sort({createdAt: -1})

    res.status(200).json(monthqty)
}

// get monthly quantities for a year
const getMonthqty = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const monthqty = await Monthqty.findById(id)

    if(!monthqty) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(monthqty)
}

// create monthluy quantities for year
const createMonthqty = async (req, res) =>{
    const {description, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec} = req.body
    
    try{
        const monthqty = await Monthqty.create({description, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec})
        res.status(200).json(monthqty)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete monthly quantity
const deleteMonthqty = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const monthqty = await Monthqty.findOneAndDelete({_id: id})

    if(!monthqty) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(monthqty)
}

// update monthly quantity
const updateMonthqty = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not Found"})
    }

    const monthqty = await Monthqty.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!monthqty) {
        return res.status(404).json({error: "Not Found"})
    }

    res.status(200).json(monthqty)
}


module.exports = {
    getMonthqties,
    getMonthqty,
    createMonthqty,
    deleteMonthqty,
    updateMonthqty
}