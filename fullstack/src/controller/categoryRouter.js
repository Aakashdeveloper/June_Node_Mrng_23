let express = require('express');
let categoryRouter = express.Router();
const {getData} = require('./dbController')

function router(menu){
    // default Route of category
    categoryRouter.route('/')
        .get(async(req,res)=>{
            //res.send(category)
            let query = {};
            let data = await getData('catgeory',query)
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