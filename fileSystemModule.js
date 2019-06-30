const fileSystemModule =  require('fs');

//create file and read it
fileSystemModule.writeFile('example.txt',"This is an example file",(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File created successully');
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
        console.log('Rename Successful')
});