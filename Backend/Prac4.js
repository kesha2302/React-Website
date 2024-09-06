const http = require('http');
const data = require('./studentadata');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'applocation\json'});

    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);