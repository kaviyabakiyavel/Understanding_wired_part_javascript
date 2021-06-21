//objects and functions 
//objects are collection of name value pair.
var person = new Object();
person["firstname"] = "Kaviya";
person["lastname"] = "Bakiyavel";
var firstNameProperty = "firstname";
console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);

//sub object 
person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = "New York";
person.address.state = 'NY';