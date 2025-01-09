const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

// only showing the profile of the user which is logged in

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})
    // although we cleared cookies after logging out 
    // user might have saved it from local storage
    // hence we need to blacklist it

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // while encoding we passed only the id of the user 
        // so we get that in the decoded variable
        const user = await userModel.findById(decoded._id)
        req.user = user
        //  now the request has info about the user
        return next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}

module.exports.authCaptain = async(req, res, next)=> {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain
        return next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}