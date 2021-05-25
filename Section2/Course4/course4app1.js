b(); //Called b
console.log(a); //undefined

var a = 'Hello word!'
function b(){
    console.log('Called b');
}

b(); //Called b
console.log(a);//undefined



//we have two phases while run javascript code.
//1)  Creation phase 
//    javascript engine set up memory for variable and function .
//2)  Excution phase
//    Before excute the code line by line the javascript engine has already set memory space for the variable and function which you created in the code .
//    so the code begins to excute line by line it can access them .

//variable 
//    However when it comes to variables , Its little bit different .  
//    in creation phase var a memory allocation is done.
//    while excuting the code it doesn't have a value .
//    so its priniting "undefiend".
//    "All variables in javascript are initially set to undefined".

//Function (Hositing will hap in function declaration )
//    In creation phase Function its entirely is placed into memory space .
//    while excuting the code line by line "whatever you consoled inside function it will print the ouput".


//Hositing will not happ in function expression 
//eg:
// fn();
// const fn = function(){
//     console.log('function expression');
// }
// fn();



