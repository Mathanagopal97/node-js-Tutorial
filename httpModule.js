const httpModule = require('http');
const httpServer = httpModule.createServer((request,response)=>{
    response.write('Hello Mathanagopal');
    response.end();
});

httpServer.listen(3000);