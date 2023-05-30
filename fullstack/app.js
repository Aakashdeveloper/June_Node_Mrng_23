let express = require('express');
let app = express();
let categoryRouter = express.Router();
let productRouter = express.Router();
let port = 8812;

app.get('/',function(req,res){
    res.send('Hi From Express Default Route')
})

// default Route of category
categoryRouter.route('/')
    .get(function(req,res){
        res.send('This is Catgeory route')
    })


//detail route of category
categoryRouter.route('/details')
    .get(function(req,res){
        res.send('This is Catgeory Details route')
    })

productRouter.route('/')
    .get(function(req,res){
        res.send('This is Product route')
    })

productRouter.route('/details')
    .get(function(req,res){
        res.send('This is products details')
    })

app.use('/category',categoryRouter)
app.use('/products',productRouter)

//create server
app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})