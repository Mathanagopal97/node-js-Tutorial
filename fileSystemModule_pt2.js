const fileSystemModule = require('fs');

//Create a directory
fileSystemModule.mkdir('SampleDir',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Directory created successfully. \n');
});

//Remove the directory
fileSystemModule.rmdir('SampleDir',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Directory removed successfully. \n')
});
