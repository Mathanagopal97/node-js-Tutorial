const httpModule = require('http');
const httpServer = httpModule.createServer((request,response)=>{
    if(request.url === '/'){
        response.write('Hello Mathanagopal');
        response.end();
    }
    else{
        response.write('Using some other domain');
        response.end();
    }
});

httpServer.listen(3000);