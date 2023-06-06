let express = require('express');
let categoryRouter = express.Router();
const {getData} = require('./dbController')

function router(menu){
    // default Route of category
    categoryRouter.route('/')
        .get(function(req,res){
            //res.send(category)
            res.render('category',{title:'Category Page',data,menu})
        })


    //detail route of category
    categoryRouter.route('/details')
        .get(function(req,res){
            res.send('This is Catgeory Details route')
        })

    return categoryRouter
}



module.exports = router