const http = require ('http');
const url = require ('url');
const fs = require ('fs');

const server = http.createServer((req,res)=>{
    const parseurl = url.parse (req.url,true);
    console.log(parseurl);
   
    if(parseurl.pathname === "/")
    {
        res.writeHead(200,{"content-Type":"text/html"});
        fs.readFile("text.html","utf8",(err,data)=>{
            if (err) throw err;
            else{
                res.write(data);
                res.end();
            }
        })
    }
})
    elseif(parseurl.pathname === "/check")
    {
        let n = parseurl.query.name
        let m = parseurl.query.mail
        let p = parseurl.query.pass
         
        res.writeHead(200,{"content-Type":"text/html"});
        fs.writeFile('db.txt',n+""+m+""+p,(err)=>{
            if (err) throw err;
            else{
                res.write(`<script>alert('register success')</script>`);
                res.end();
            }
        })
    }
     elseif(parseurl.pathname === "/log")
        {
            res.writeHead(200,{"content-Type":"text/html"});
            fs.readFile("txt1.html","utf8",(err,data)=>{
                if (err) throw err;
                else{
                    res.write(data);
                    res.end();
                }
            })
        }
        elseif(parseurl.pathname === "/logcheck")
            res.writeHead(200,{"content-Type":"text/html"});
        fs.readFile("txt1.html","utf8",(err,data)=>{
            if (err) throw err;
           else {
                let ln = parseurl.query.lname
                let lp = parseurl.query.lpass
                 let k = data.split('')
                 let ar = k[0].split('')
                 if(ar[0] == ln && ar[2] == lp){
                    res.write(`<script>alert("login success")</script> `);
                 }
        
           }
           else{
            res.write(`<script>alert("olunga padida")</script>`);
           }
              res.end();  
            })
            else {
                res.writeHead(404,{"content-Type":"text/html"});
                res.write(`<h1> olunga padida </h1>`);
                res.end();
            
            }
server.listen(5000,()=>{
   console.log("server running on http://localhost:5000");
})