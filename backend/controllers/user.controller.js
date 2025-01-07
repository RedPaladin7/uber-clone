const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

// tokens are used to confirm the session of the user

module.exports.registerUser = async (req, res, next) => {
    // if anything goes wrong while checking for errors in users route
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    // extracting info from the req body
    const {fullname, email, password} = req.body
    
    // userModel has method to hash password
    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken()
    res.status(201).json({token, user})
}

module.exports.loginUser = async(req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body

    const user = await userModel.findOne({email}).select('+password')
    if(!user){
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const token = user.generateAuthToken()

    res.status(200).json({token, user})
}

module.exports.getUserProfile = async(req, res, next) => {
    
}