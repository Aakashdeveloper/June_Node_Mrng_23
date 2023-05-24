let os = require('os');
console.log(os.platform()) //darwin
console.log(os.arch()) // x64
console.log(os.cpus().length+" core") // 4 core
console.log(os.freemem()) //830509056 bytes
console.log(os.uptime()) //772288sec