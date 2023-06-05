let express = require('express');
let categoryRouter = express.Router();

let data = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]


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