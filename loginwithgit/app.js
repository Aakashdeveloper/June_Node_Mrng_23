let express = require('express');
let app = express();
let superagent = require('superagent');
let cors = require('cors');
const request = require('request');
let port = process.env.PORT || 9111;
app.use(cors())

//8fa84b8ca2d973b0a6ca
//f12cf82e7da8a9b23778b3d591c9a34f320ffc86

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=8fa84b8ca2d973b0a6ca">Login With Git</a>')
})

app.get('/profile',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Code is required'
        })
    }
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'8fa84b8ca2d973b0a6ca',
            client_secret:'f12cf82e7da8a9b23778b3d591c9a34f320ffc86',
            code:code     
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            let access_token = result.body.access_token;
            const option = {
                uri:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':`Bearer ${access_token}`,
                    'User-Agent':'mycode'
                }
            }
            request(option,(err,response,body) => {
                res.send(body)
            })
        })
})



app.listen(port,() => {
    console.log(`listening on port ${port}`)
})