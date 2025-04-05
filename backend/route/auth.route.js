const express=require('express')
const { register, login } = require('../controller/auth.controller.js')

const router=express.Router()

router.post("/login",login)
router.post("/register",register)

module.exports=router;