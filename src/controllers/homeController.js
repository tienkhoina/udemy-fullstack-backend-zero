const { json } = require('express');
const connection = require('D:\\backendtest\\src\\config\\database.js')
const {getAllUser}=require('../services/CRUDService')

const getHomepage = async(req,res)=>{
    let results = await getAllUser();
    return res.render('homepage.ejs',{listUser: results})
}

const getTest= (req,res)=>{
    res.send('test')
}
const getRender = (req,res)=>{
    res.render('sample.ejs')
}

const getCreateUser = (req,res)=>{
   return res.render('create.ejs')
}
const createUser = async (req,res)=>{
    console.log("req.body:",req.body)
    let email=req.body.email
    let name=req.body.name
    let city=req.body.city

    /*connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).send('An error occurred while inserting data.');
            }
          
            return res.status(200).send('User created successfully!');
        }
    );*/
    let [results,fields]=await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
    )

    console.log('Data inserted successfully:', results);

    return res.send("create users success")
    
}

const getUpdate = (req,res)=>{
    res.render('edit.ejs');
}
module.exports={
    getHomepage, getTest,getRender,createUser,getCreateUser,getUpdate
}