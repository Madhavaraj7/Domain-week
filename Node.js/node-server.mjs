import http from "http"

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>hello madhavaraj<h1/>")
});

server.listen(2333,()=>{
    console.log("server  running");
});