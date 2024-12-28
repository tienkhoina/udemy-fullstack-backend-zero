const express = require('express')
const router=express.Router()

const {getHomepage, getTest, getRender,createUser,getCreateUser,getUpdate, update, getDelete, deleteuser}= require("../controllers/homeController")


router.get('/', getHomepage)
router.get('/test', getTest)
router.get('/tienkhoi',getRender)
router.get('/create-user',getCreateUser)
router.get('/update/:id',getUpdate)
router.get('/delete/:id',getDelete)
 
router.post('/create-user',createUser)
router.post('/update/',update)
router.post('/deleteuser',deleteuser)

module.exports=router