//Comparison operators
console.log(1 < 2 < 3); //expect true 
console.log(3 < 2 < 1); //expect false // browser return true
//operator precedence and associavitivty ( < )  is left to right associvaity

console.log(3 < 2) //false
console.log(false < 1) //true

Number(false) //0
Number(true) //1
//converting the boolean into differnet type 
console.log(0 < 1) //true

Number('3')//3
Number(undefined)//NAN
Number(null)//0
Number("") //0

false == 0 //true
null == 0 //false
null < 1 //true
"" == 0 //true
"" == false //true

3 === 3 //true
'3' === '3' //true
'3' === 3 //false

var a = 0;
var b = false;
if(a === b){
    console.log('They are equal');
}else{
    console.log('Nope not equal');
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness