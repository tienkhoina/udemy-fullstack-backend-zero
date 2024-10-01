const express = require('express')
const router=express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! leu leu')
  })
  router.get('/test', (req, res) => {
      res.send('test')
    })
    router.get('/tienkhoi', (req, res) => {
     res.render('sample.ejs')
    })
 
  
  module.exports=router