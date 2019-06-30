/*
author : Mathanagopal
EventEmitter is inbuilt in node.js
The following lines are required to be included in the program to
use the EventEmitter:

const EventEmitter = require('events');
const <custom_name> = new EventEmitter();

The syntax to add the event listener is 
<custom_name>.on('<event Name>',([args if any needed])=>{
    <To do the action here>
});

To invoke the event listener we have to emit that event
<custom_name>.emit('<event Name>',[args if any]);

we can also use the EventEmitter in classes
*/




const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log('tutorial event called');
});

eventEmitter.on('adder',(num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial');
eventEmitter.emit('adder',13,14);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }

    get theName(){
        return this._name;
    }
}

let mathan = new Person('Mathan');
mathan.on('name',(str)=>{
    console.log(mathan.theName+' '+str);
});

mathan.emit('name','gopal');