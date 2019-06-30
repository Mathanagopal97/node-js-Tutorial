const fileSystemModule = require('fs');

const readStream = fileSystemModule.createReadStream('example.txt','utf8');
const writeStream = fileSystemModule.createWriteStream('example2.txt');

readStream.on('data',(chunkOfData)=>{
    console.log(chunkOfData);
    writeStream.write(chunkOfData,(error)=>{
        if(error)
            console.log(error);
        else
            console.log('WriteStream implemented successfully. \n')
    });
});