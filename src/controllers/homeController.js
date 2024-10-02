const getHomepage = (req,res)=>{
    res.send('Hello World! leu leu')
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