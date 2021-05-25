//Single threaded synchronous execution 
//single thread - one at a time
//That means that one command is being executed at a time .
//Javascriot is single threaded . but underthehood in browserside its different
//synchronous - one at a time(only one things can happen at a time.)

//https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd#:~:text=Javascript%20is%20a%20single%20threaded,before%20moving%20onto%20the%20next.&text=Once%20those%20tasks%20are%20finished,the%20stack%20as%20a%20callback.
// 1) Javascipt is a single thread - only one things can happen at a time .
// 2) The javascript within a chrome browser is implemented by v8 engine.
// 3) the v8 engine has two parts .
//     memory heap  - its used to allocate the memory to your javascript program
//     call stack - within the call stack , your jscode is read and get executed line by line.
// 4)  call stack is working First in last out (FILO) - whenever a line of code gets inside the call stack it gets executed and move out of the stack.
//     (javascript is a single thread language because of only one call stack)


// then how async call happening in javascript ?
//1) synchronous call all the work is done line by line .
//    i.e first one task is executed then second task is excute , no matter how much time one task will take .
//    this aries the problem of time wastage as well as resourse wastage . 
//2) this two problem are overcome by asynchronous calls . it wont wait for first task as to complete . it works simuntanously.
//3) When we have  makes API calls or image processing - we use asyncs call.

//1) Within js we have a lexical environment ,syntax parser , an execution context(memory heap and call stack)that is used to excute the js code.
//2) except browser also have Event loop , callback queue , and webAPI that is also used to run js code . 

//DOM , AJAX , TIMEOUT are not acyually part of javascript but the part of runtime environment or browser . 
//so these can be run asynchronously within the webAPI => using the callback queue => and again put into => call stack  using event loop to execute.

//https://www.geeksforgeeks.org/why-javascript-is-a-single-thread-language-that-can-be-non-blocking/
//https://theflyingmantis.medium.com/javascript-single-threaded-non-blocking-asynchronous-concurrent-language-ffae97c57bef

// note : 
// This is the architecture of a JS Runtime. V8 does not have these WebAPI’s. 
// These are given by runtime. In chrome browser JS runtime, browser has it while in Node it’s given by C++ libraries
// The Event loop,webapi , which is a part of the JavaScript runtime environment, is a mechanism responsible for handling callbacks.