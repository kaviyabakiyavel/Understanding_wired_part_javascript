//JSON and object literals 
//JSON - Javascript object notation
//javascript object notation is inspired by the object literal notation in javascript.
// var objectLiteral = {
//     firstname : 'Marry',
//     isAProgrammer : true
// }
// console.log(objectLiteral);


//data be sended over internet over xml 
{/* <object>
    <firstname>marry</firstname>
    <isAProgrammer>true</isAProgrammer>
</object> */}
//if its download "lot of unneccessary time width its taking to download this data"
//instead of sending data in xml format . 
//send in json format (string)

// (valid object literal syntax)
// {
//     'firstname' : 'Marry',
//     'isAProgrammer' : 'true'  
// }

//json  is techinically a subset of the object literal syntax.
//but not all object literal syntax is valid JSON.

//convert from object to json 
var objectLiteral = {
    firstname : 'Marry',
    isAProgrammer : true
}
console.log(JSON.stringify(objectLiteral));


//convert from json to object
var jsonValue = JSON.parse('{"firstname : "mary" , "isAProgrammer" : true}')
console.log(jsonValue);

//Easy to transfer when pushing data from the client in a browser to the server.