const fileSystemModule =  require('fs');

//create file
fileSystemModule.writeFile('example.txt',"This is an example file",(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('file created successully');
        fileSystemModule.readFile('example.txt','utf8',(err,fileContents)=>{
            if(err)
                console.log(err);
            else
                console.log(fileContents);
        });
    }
        
});