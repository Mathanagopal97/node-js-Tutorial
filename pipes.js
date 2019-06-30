const fileSystemModule = require('fs');
const zLib = require('zlib');//For compress purposes

const gzip = zLib.createGzip();//To compress a file
const gUnzip = zLib.createGunzip();//To decompress the file

const readStream = fileSystemModule.createReadStream('example.txt','utf8');
const writeStream = fileSystemModule.createWriteStream('example2.txt.gz');

const readStreamForUnzip = fileSystemModule.createReadStream('example2.txt.gz');
const writeStreamForUnzip = fileSystemModule.createWriteStream('uncompressed.txt');

readStream.pipe(gzip).pipe(writeStream);//Zip the file
readStreamForUnzip.pipe(gUnzip).pipe(writeStreamForUnzip);//Unzip the file