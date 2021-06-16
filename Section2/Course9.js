//what about asynchronous callbacks ? 
//Asynchronous more than one at a time 
//so since javascript is synchronous , how is this handling those asynchronous events ?
//First we need to think about javascript engine .
// javscript enginee it will run inside browser 
// 1) rendering engine.
// 2) Javacript engine
// 3) HTTP Request

//call stack -> event loop -> eventqueue/callbackqueue

//long running function
function waitThreeSeconds(){
    debugger
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}
function clickHandler(){
    debugger
    console.log('click event');
}
//listen for the click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');