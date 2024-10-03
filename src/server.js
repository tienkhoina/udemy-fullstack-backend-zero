const express = require('express')
const path= require('path');// commonjs
require('dotenv').config()
const connection=require("./config/database")
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")

const app = express()
const port =  process.env.PORT
const hostname= process.env.HOST_NAME


configViewEngine(app)

app.use(express.static(path.join(__dirname,'public')))

app.use('/',webRoutes)


connection.query(
  'select * from Users ',
  function (err, results, fields) {
    console.log(">>>>result=",results); // results contains rows returned by server
    console.log(">>> fields=",fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})