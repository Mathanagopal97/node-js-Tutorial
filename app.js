const tutorial = require('./tutorial');

console.log(tutorial.PI);
console.log(tutorial.sum(1,10));
console.log(new tutorial.SomeMathObject());

const mathObject = new tutorial.SomeMathObject();
console.log(mathObject.something);
