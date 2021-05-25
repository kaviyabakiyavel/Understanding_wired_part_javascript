var a = 'Hellow world';
console.log(a); //undefined means value is not assigned to that variable 

//console.log(a); //reference error : a is not defined(in creation phase didnt find a . when moves to excution phase idont have a memory at all )

if(a === undefined){
    console.log('a is undefined')
}else{
    console.log('a is defined')
}
