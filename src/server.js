const express = require('express')
const path= require('path');// commonjs
require('dotenv').config()
const mysql = require('mysql2');
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")

const app = express()
const port =  process.env.PORT
const hostname= process.env.HOST_NAME


configViewEngine(app)

app.use(express.static(path.join(__dirname,'public')))

app.use('/',webRoutes)
// Get the client



// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password:'Letienkhoi1710',
  database: 'backendtest',
});

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