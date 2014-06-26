var http = require("http"),
    url = require("url");
    
function start(){
  function onRequest(request,response){
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write("Hello world!");
      response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started!");
}

module exports = {
  start : start
}
