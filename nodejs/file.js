//const fs = require("fs");
const http = require("http");
const myServer = http.createServer((req,res) => {
  console.log("new re rec");

 res.end("hello from server");


});

myServer.listen(8000, ()=>console.log("server started"));



//fs.writeFileSync("./test.txt", "hey there");

//fs.appendFileSync("./test.txt", "heythere");
