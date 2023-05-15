const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const iusersSchema = new Schema({
    role: {
        type: String,
        enum: ['admin', 'inventory manager'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
iusersSchema.statics.signup = async function(role, email, password) {

    // validation
    if (!email || !password) {
        throw Error('All Fields must be Filled!')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not Valid.')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('The Password you have entered is not Strong Enough!')
    }

    const exists = await this.findOne({ email})

    if (exists) {
        throw Error('Email Already Exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const iusers = await this.create({ role, email, password: hash})
    return iusers

}

//static login method
iusersSchema.statics.login = async function(role, email, password) {

    // validation
    if (!email || !password) {
        throw Error('All Fields must be Filled!')
    }

    const iusers = await this.findOne({ email})

    if (!iusers) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, iusers.password)

    if (!match) {
        throw Error('Incorrect Password')
    }
    return iusers
}

module.exports = mongoose.model('Iuser', iusersSchema)