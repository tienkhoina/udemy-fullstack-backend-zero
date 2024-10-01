const path = require('path')

const configViewEngine = (app)=>{
    app.set('views', 'D:\\backendtest\\src\\views');

    app.set('view engine', 'ejs')
}
module.exports = configViewEngine