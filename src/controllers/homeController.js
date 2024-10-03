const { json } = require('express');
const connection = require('D:\\backendtest\\src\\config\\database.js')

const getHomepage = (req,res)=>{

    let users=[];

    connection.query(
        'select * from Users ',
        function (err, results, fields) {
          users = results
          console.log(">>>>result homepage =",results); // results contains rows returned by server
          console.log(">>> fields=",fields); // fields contains extra meta data about results, if available
        }
      );
    //console.log("check users", users)  

    res.send(JSON.stringify(users))
}

const getTest= (req,res)=>{
    res.send('test')
}
const getRender = (req,res)=>{
    res.render('sample.ejs')
}

module.exports={
    getHomepage, getTest,getRender
}