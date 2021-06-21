
var person = new Object();
//or 
//Objects and object literals 
var person = {};
console.log(person);

//i can set up properties ad method inside object
var Tony  = {
    firstname:'kaviya',
    lastname:'bakiyavel',
    address:{
        street : '11 Main st.',
        city:'New York',
        state:'NY'
    }
};
function greet(){
    console.log('Hi' + person.firstname);
}
greet(Tony);
greet({
    firstname : 'Mary' ,
    lastname : 'Doe'
});
Tony.address2 = {
    street : '333 second st.'
}