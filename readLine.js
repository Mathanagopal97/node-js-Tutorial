const readLine = require('readline');
const rl = readLine.createInterface({input : process.stdin, output : process.stdout});

let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);
let answer = num1 + num2;


//Use ` ` to include ${var_name} in console.log;


rl.question(`What is ${num1} + ${num2}? \n`, 
(userInput)=>{
    if(userInput == answer){
        rl.close();
    }
    else{
        rl.setPrompt(`Your answer ${userInput} is incorrect. Try again \n`);
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer ${userInput} is incorrect. Try again \n`);
                rl.prompt();
            }

        })
    }
});




rl.on('close',()=>{
    console.log('Correct answer');
});