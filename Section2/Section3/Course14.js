//Function are objects
//in javascript functions are objects.

//Function doesnt have name is called anonymous 

function greet(){
    console.log('hi');
}
//functions are actually object in javascript.
//using dot notation i can create a property called language.
greet.language = 'english'
console.log(greet) //output : function
console.log(greet.language) // english
console.log(greet())//invoke code