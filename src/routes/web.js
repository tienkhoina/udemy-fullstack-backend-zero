const express = require('express')
const router=express.Router()

const {getHomepage, getTest, getRender,createUser,getCreateUser}= require("../controllers/homeController")


router.get('/', getHomepage)
router.get('/test', getTest)
router.get('/tienkhoi',getRender)
router.get('/create-user',getCreateUser)

 
router.post('/create-user',createUser)

module.exports=router