//Framework aside
//Faking namespaces

var greet = 'Hello!';
var greet = 'Hola!';
console.log(greet);

var english = {};
var spanish = {};
english.greet = 'Hello';
spanish.greet = 'Hola!';
console.log(english); //no nampsapce collision 
english.greetings.greet = 'hello!';//(undefined.greet)//left associvative
