//Operator precedence in javascript
//Functions are called in order of precedence (higher precedence wins)
//what order operator functions get called in left-to-right or right-to-left
var a = 3 + 4 * 5;
console.log(a);
//ans 23 = 4*5 =20+3

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//Left-associativity (left-to-right) means that it is processed as (a OP1 b) OP2 c, while right-associativity (right-to-left) means it is interpreted as a OP1 (b OP2 c). Assignment operators are right-associative, so you can write:
var a = 2, b = 3, c = 4;
a = b = c; //Associativity 
console.log(a);
console.log(b);
console.log(c);

//Associativity come into the picture when two or more operators have the same precedence.

var a = (3+4)*5;
console.log(a);
