var a = 'Hello world!';
function b(){

}
//in javascript when writing the code "variable or function" - if its not inside the function 
//Get attached to the global object .
console.log(a); //Hello world!
console.log(window.a); //Hello world!

//conculsion
//when your javascript code is excuted , an execution context is created. 
//At the base level , when your are not inside t=a function . -> refer to global object 
//global object is created by javascript enginee -> create for you as part of that execution context.
//if your running code inside a browser, that global object is the window object.
//you get a special variable called this .
//And in the case of the browser /this/ at that global level is just the same as the window object ,

