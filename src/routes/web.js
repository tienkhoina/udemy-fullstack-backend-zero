const express = require('express')
const router=express.Router()

const {getHomepage, getTest, getRender,createUser,getCreateUser,getUpdate, update}= require("../controllers/homeController")


router.get('/', getHomepage)
router.get('/test', getTest)
router.get('/tienkhoi',getRender)
router.get('/create-user',getCreateUser)
router.get('/update/:id',getUpdate)
 
router.post('/create-user',createUser)
router.post('/update/',update)

module.exports=router