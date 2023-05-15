const Iuser = require('../models/iusers.model')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d'})
}

// login users
const loginUser = async(req, res) => {

    const {role, email, password} = req.body

    try{
        const iusers = await Iuser.login(role, email, password)

        // create a token
        const token = createToken(iusers._id)

        res.status(200).json({role, email, token})
    }catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'Login User'})
}

// signup users
const signupUser = async(req, res) => {

    const { role, email, password } = req.body

    try{
        const iusers = await Iuser.signup(role, email, password)

        // create a token
        const token = createToken(iusers._id)

        res.status(200).json({role, email, token})
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }