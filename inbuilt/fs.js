let fs = require('fs');

// fs.writeFile('myCode.txt','This is NodeJs Code',function(){
//     console.log('File Created')
// })

// append file
// fs.appendFile('myText.txt','This is line code \n',function(){
//     console.log('File Appended')
// })

// fs.readFile('db.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })


// let data = fs.readFileSync('db.json',{encoding: 'utf-8',flag:'r'});
// console.log(data)

// let data1 = fs.readFileSync('myText.txt',{encoding: 'utf-8',flag:'r'});
// console.log(data1)

// fs.rename('myCode.txt','myContent.txt',function(err){
//     if(err) throw err
//     console.log('File Renamed')
// })

fs.unlink('myContent.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
})
