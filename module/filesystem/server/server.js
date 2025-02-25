const http = require('http')
const server = http.createServer((req,res)=>{
    res.statuscode = 200;
    res.setHeader("content-Type","text/html");
    res.end(`<h1>hii welcome</h1>`);
});
server.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});