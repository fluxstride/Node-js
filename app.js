const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   res.writeHead(200,{'content-type':'text/html'});
   fs.readFile('./index.html','UTF8',(err,html)=>{
	   if (err) throw err;
	   res.write(html);
	   res.end();
   })
  
})
	server.listen(8080,console.log("server started succesfully and listening to port 8080"))



