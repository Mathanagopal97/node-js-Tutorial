const fileSystemModule = require('fs');

//Create a directory
fileSystemModule.mkdir('SampleDir',(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('Directory created successfully. \n');
        fileSystemModule.writeFile('./SampleDir/example.txt','Sample data for the file. ',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('File created successfully. \n');
        });
    }
        
});

// Remove Directory with files in it
fileSystemModule.unlink('./SampleDir/example.txt',(err)=>{
    if(err)
        console.log(err);
    else{
        fileSystemModule.rmdir('SampleDir',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Directory removed successfully. \n')
        });
    }
});


//Remove the empty directory. Can only be used on an empty folder without any files in it.
fileSystemModule.rmdir('SampleDir',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Directory removed successfully. \n')
});

//Read a directory and delete the files in them.
fileSystemModule.readdir('SampleDir',(error,fileList)=>{
    if(error)
        console.log(err);
    else{
        console.log(fileList);
        for(let file of fileList){
            fileSystemModule.unlink(`./SampleDir/${file}`,(error)=>{
                if(error)
                    console.log(error);
                else
                    console.log(`${file} deleted successfully. \n`);
            });
        }
    }
});
