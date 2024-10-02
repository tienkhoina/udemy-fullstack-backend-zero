const express = require('express')
const router=express.Router()

const {getHomepage, getTest, getRender}= require("../controllers/homeController")


router.get('/', getHomepage)
  router.get('/test', getTest)
    router.get('/tienkhoi',getRender)
 
  
  module.exports=router