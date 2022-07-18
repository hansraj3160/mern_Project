const user = require('../models/userModel')
const register = async (req, res) => {
    console.log('Register', req.body)
    const {pass,email}=req.body
    try {


    }
    catch (error) {
        res.send(error.message)
    }
}
const login = async (req, res) => {

    console.log('Register')
    try {

    }
    catch (error) {
        res.send(error.message)
    }
}
module.exports = { register, login }