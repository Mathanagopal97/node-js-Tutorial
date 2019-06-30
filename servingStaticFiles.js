const httpModule = require('http');
const fileSystemModule = require('fs');

httpModule.createServer((request,response)=>{
    const readStream = fileSystemModule.createReadStream('./static/index.html');
    response.writeHead(200,{'Content-type' : 'text/html'});
    readStream.pipe(response);
}).listen(3000);