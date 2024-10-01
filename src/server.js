const express = require('express')
const path= require('path');// commonjs
require('dotenv').config()

const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")

const app = express()
const port =  process.env.PORT
const hostname= process.env.HOST_NAME


configViewEngine(app)

app.use(express.static(path.join(__dirname,'public')))

app.use('/',webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})