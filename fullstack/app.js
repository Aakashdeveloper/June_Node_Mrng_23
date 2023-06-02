let express = require('express');
let app = express();
let morgan = require('morgan');
let fs = require('fs');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9101;

let menu = [
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]

let categoryRouter = require('./src/controller/categoryRouter')(menu);
let productRouter = require('./src/controller/productRouter')(menu);

// static file path
app.use(express.static(__dirname+'/public'));
//html file path
app.set('views','./src/views');
// view engine name
app.set('view engine', 'ejs')

//middleware
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))

app.get('/',function(req,res){
    //res.send('Hi From Express Default Route')
    res.render('index',{title:"Home Page",menu})
})

app.use('/category',categoryRouter)
app.use('/products',productRouter)

//create server
app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})