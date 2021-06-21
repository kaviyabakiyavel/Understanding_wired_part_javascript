//Default Values
function greet(name){
    console.log('Hello' + name);
}
greet('Tony');

console.log(0 || 1)
console.log(undefined || 'hello')
console.log(null || 'hello')
console.log("" || "hello")

function greet1(name){
  name = name || '<Your name here>';
  console.log('hello' + name);
}
greet1();