//Scope Chain 
//function b referning to global excution context 
//example 1
// function b() {
//     console.log(myVar);
// }
// function a() {
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a();
// //output : 1

// //example2
// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a(); //when call a refers to global excution 
// //b(); //when call b throws error is not defined because b function written inside function a


//example3
function a() {
    function b() {
        console.log(myVar); 
        //trying to find myvar variable inside b function 
        //if not trying to find inside a 
        //it not a refers to global scope 
        //pick the myvar variable from the global excution context //ouptut 1 
    }
    b();
}
var myVar = 1;
a();