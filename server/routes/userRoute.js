const express=require('express')
const { register, login } = require('../controllers/userControlle')
const user_route=express()

user_route.post('/register',register)
user_route.post('/login',login)

module.exports=user_route