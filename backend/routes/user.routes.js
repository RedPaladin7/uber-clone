const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], userController.registerUser)
// register user function is called whenever a post request is made to /register

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], userController.loginUser)

// any middleware to be executed is inserted before the controller function

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router