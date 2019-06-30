const fileSystemModule =  require('fs');

//create file and read it
fileSystemModule.writeFile('example.txt',"This is an example file",(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File created successully \n');
        fileSystemModule.readFile('example.txt','utf8',(err,fileContents)=>{
            if(err)
                console.log(err);
            else
                console.log(fileContents);
        });
    }
        
});


//Rename File
fileSystemModule.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Rename Successful \n')
});

//Append Data to the File
fileSystemModule.appendFile('example2.txt','Some data that is being appended',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Data Appended Successfully \n');
});

//Unlink a file
fileSystemModule.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Unlink Successful. \n')
});